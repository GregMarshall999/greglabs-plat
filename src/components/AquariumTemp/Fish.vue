<template>
    <div class="fish" :style="fishStyle" @click="handleClick">
        <img 
            :src="fishConfig.image" 
            :alt="type"
            :style="{
                transform: `scaleX(${direction}) rotate(${tilt}deg)`,
                transition: 'transform 0.3s ease'
            }"
        />
        <div v-if="shouldShowName" class="fish-name">{{ name }}</div>
        <div v-if="speechBubble" class="speech-bubble">{{ speechBubble }}</div>
        <div v-if="isDead" class="dead-overlay">
            <img :src="'/aquarium/dead.png'" alt="Dead">
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { fishTypes } from '../../config/fishConfig';

const props = defineProps({
    type: {
        type: String,
        required: true
    },
    name: {
        type: String,
        default: ''
    },
    tankRef: {
        type: Object,
        required: true
    },
    isSelected: {
        type: Boolean,
        default: false
    },
    rodPosition: {
        type: Object,
        default: () => ({ x: 0, y: 0 })
    },
    foodPieces: {
        type: Array,
        default: () => []
    },
    mode: {
        type: String,
        default: 'select'
    },
    otherFish: {
        type: Array,
        default: () => []
    },
    options: {
        type: Object,
        default: () => ({
            collision: false,
            growth: false,
            boid: false
        })
    }
});

const emit = defineEmits(['click', 'collision', 'death']);

const position = ref({ x: 0, y: 0 });
const target = ref({ x: 0, y: 0 });
const direction = ref(1);
const showName = ref(false);
const tilt = ref(0);
const speechBubble = ref('');
const isCaught = ref(false);
const size = ref(1);
const isDead = ref(false);
const hunger = ref(100);
const lastFed = ref(Date.now());
const speechTimeout = ref(null);
const velocity = ref({ x: 0, y: 0 });
const deathTime = ref(0);
const deteriorationStage = ref(0);

const BOID_CONFIG = {
  alignment: 0.1,       // How much fish align with neighbors
  cohesion: 0.1,        // How much fish move toward center of mass
  separation: 0.1,      // How much fish avoid each other
  maxSpeed: 3,          // Maximum speed
  maxForce: 0.1,        // Maximum steering force
  perceptionRadius: 100 // How far fish can see
};

const fishConfig = computed(() => fishTypes[props.type] || fishTypes.goldfish);

const shouldShowName = computed(() => props.name && showName.value);

const fishStyle = computed(() => ({
    position: 'absolute',
    left: `${position.value.x}px`,
    top: `${position.value.y}px`,
    transition: 'all 0.5s ease',
    cursor: 'pointer',
    transform: `scale(${size.value})`,
    transformOrigin: 'center',
    opacity: isDead.value ? 0.7 : 1
}));

const getRandomPosition = () => {
    if (!props.tankRef) return { x: 0, y: 0 };
    
    const tank = props.tankRef;
    const maxX = tank.clientWidth - 100;
    const maxY = tank.clientHeight - 100;
    
    return {
        x: Math.random() * maxX,
        y: Math.random() * maxY
    };
};

const updateTilt = (dy) => {
    tilt.value = Math.min(Math.max(dy * 0.1, -15), 15);
};

const showSpeech = (text) => {
    if (speechTimeout.value) {
        clearTimeout(speechTimeout.value);
    }
    speechBubble.value = text;
    speechTimeout.value = setTimeout(() => {
        speechBubble.value = '';
    }, 2000);
};

const updateBoidBehavior = () => {
  if (!props.options.boid || isDead.value) return;

  const neighbors = props.otherFish.filter(other => {
    const dx = other.position.x - position.value.x;
    const dy = other.position.y - position.value.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < BOID_CONFIG.perceptionRadius;
  });

  if (neighbors.length === 0) return;

  // Calculate alignment
  const alignment = neighbors.reduce((acc, neighbor) => ({
    x: acc.x + neighbor.velocity.x,
    y: acc.y + neighbor.velocity.y
  }), { x: 0, y: 0 });

  alignment.x /= neighbors.length;
  alignment.y /= neighbors.length;

  // Calculate cohesion
  const cohesion = neighbors.reduce((acc, neighbor) => ({
    x: acc.x + neighbor.position.x,
    y: acc.y + neighbor.position.y
  }), { x: 0, y: 0 });

  cohesion.x /= neighbors.length;
  cohesion.y /= neighbors.length;

  // Calculate separation
  const separation = neighbors.reduce((acc, neighbor) => {
    const dx = position.value.x - neighbor.position.x;
    const dy = position.value.y - neighbor.position.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return {
      x: acc.x + (dx / (distance * distance)),
      y: acc.y + (dy / (distance * distance))
    };
  }, { x: 0, y: 0 });

  // Apply forces
  const force = {
    x: (alignment.x * BOID_CONFIG.alignment + 
        cohesion.x * BOID_CONFIG.cohesion + 
        separation.x * BOID_CONFIG.separation),
    y: (alignment.y * BOID_CONFIG.alignment + 
        cohesion.y * BOID_CONFIG.cohesion + 
        separation.y * BOID_CONFIG.separation)
  };

  // Limit force
  const forceMagnitude = Math.sqrt(force.x * force.x + force.y * force.y);
  if (forceMagnitude > BOID_CONFIG.maxForce) {
    force.x = (force.x / forceMagnitude) * BOID_CONFIG.maxForce;
    force.y = (force.y / forceMagnitude) * BOID_CONFIG.maxForce;
  }

  // Update velocity
  velocity.value.x += force.x;
  velocity.value.y += force.y;

  // Limit speed
  const speed = Math.sqrt(velocity.value.x * velocity.value.x + velocity.value.y * velocity.value.y);
  if (speed > BOID_CONFIG.maxSpeed) {
    velocity.value.x = (velocity.value.x / speed) * BOID_CONFIG.maxSpeed;
    velocity.value.y = (velocity.value.y / speed) * BOID_CONFIG.maxSpeed;
  }
};

const updateDeathDeterioration = () => {
  if (!isDead.value) return;

  const now = Date.now();
  const timeSinceDeath = (now - deathTime.value) / 1000;

  if (timeSinceDeath > 10 && deteriorationStage.value === 0) {
    deteriorationStage.value = 1;
    showSpeech('...');
  } else if (timeSinceDeath > 20 && deteriorationStage.value === 1) {
    deteriorationStage.value = 2;
    showSpeech('...');
  }

  if (position.value.y > 0) {
    position.value.y -= 0.2;
  }
};

const checkCollisions = () => {
    if (!props.options.collision || isDead.value) return;

    props.otherFish.forEach(otherFish => {
        if (otherFish === props) return;

        const dx = otherFish.position.x - position.value.x;
        const dy = otherFish.position.y - position.value.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const collisionDistance = 50 * (size.value + otherFish.size) / 2;

        if (distance < collisionDistance) {
            if (props.options.growth) {
                const sizeRatio = size.value / otherFish.size;
                if (sizeRatio > 1.5) {
                    showSpeech('Yum!');
                    size.value += 0.2;
                    emit('death', otherFish);
                } else if (sizeRatio < 0.67) {
                    handleFishDeath();
                } else {
                    const messages = ['Ouch!', 'Hey!', 'Oi!', 'Hi!', 'Bump!'];
                    const message = messages[Math.floor(Math.random() * messages.length)];
                    const otherName = otherFish.name || 'fish';
                    showSpeech(`${message} ${otherName}`);
                    
                    position.value.x -= dx * 0.1;
                    position.value.y -= dy * 0.1;
                    
                    target.value = getRandomPosition();
                }
            } else {
                const messages = ['Ouch!', 'Hey!', 'Oi!', 'Hi!', 'Bump!'];
                const message = messages[Math.floor(Math.random() * messages.length)];
                const otherName = otherFish.name || 'fish';
                showSpeech(`${message} ${otherName}`);
                
                position.value.x -= dx * 0.1;
                position.value.y -= dy * 0.1;
                target.value = getRandomPosition();
            }
        }
    });
};

const updateHunger = () => {
    if (!props.options.growth || isDead.value) return;

    const now = Date.now();
    const timeSinceFed = (now - lastFed.value) / 1000;
    const hungerRate = fishConfig.value.hungerRate || 1;
    
    hunger.value = Math.max(0, 100 - (timeSinceFed * hungerRate));
    
    if (hunger.value < 20) {
        showSpeech('Hungry...');
    }
    
    if (hunger.value <= 0) {
        handleFishDeath();
    }
};

const updateSize = () => {
    if (!props.options.growth || isDead.value) return;

    const now = Date.now();
    const timeSinceFed = (now - lastFed.value) / 1000;
    const shrinkRate = fishConfig.value.shrinkRate || 0.1;
    
    size.value = Math.max(1, size.value - (timeSinceFed * shrinkRate / 1000));
};

const checkFoodCollision = () => {
    if (props.mode !== 'feed' || isDead.value) return;
    
    props.foodPieces.forEach((food, index) => {
        const dx = food.x - position.value.x;
        const dy = food.y - position.value.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 30) {
            if (props.options.growth) {
                size.value += 0.1;
                hunger.value = 100;
                lastFed.value = Date.now();
            }
            props.foodPieces.splice(index, 1);
        }
    });
};

const updatePosition = () => {
    if (isDead.value) {
        updateDeathDeterioration();
        return;
    }

    if (isCaught.value) {
        position.value = {
            x: props.rodPosition.x,
            y: props.rodPosition.y - 100
        };
        return;
    }
    
    if (props.options.boid) {
        updateBoidBehavior();
        position.value.x += velocity.value.x;
        position.value.y += velocity.value.y;
    } else {
        const dx = target.value.x - position.value.x;
        const dy = target.value.y - position.value.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        updateTilt(dy);
        
        if (distance < 5) {
            target.value = getRandomPosition();
            direction.value = target.value.x < position.value.x ? -1 : 1;
        } else {
            position.value.x += (dx / distance) * fishConfig.value.speed;
            position.value.y += (dy / distance) * fishConfig.value.speed;
        }
    }
    
    checkCollisions();
    checkFoodCollision();
    updateHunger();
    updateSize();
    
    requestAnimationFrame(updatePosition);
};

const handleClick = () => {
    if (props.mode === 'select' && !isDead.value) {
        emit('click');
    }
};

const handleFishDeath = () => {
  isDead.value = true;
  deathTime.value = Date.now();
  deteriorationStage.value = 0;
  emit('death', props);
};

onMounted(() => {
    position.value = getRandomPosition();
    target.value = getRandomPosition();
    direction.value = target.value.x < position.value.x ? -1 : 1;
    updatePosition();
});

watch(() => props.mode, (newMode) => {
    if (newMode !== 'rod') {
        isCaught.value = false;
        target.value = getRandomPosition();
    }
});
</script>

<style scoped>
.fish {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.fish img {
    width: 100px;
    height: auto;
}

.fish-name {
    position: absolute;
    bottom: -20px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 2px 8px;
    border-radius: 10px;
    font-size: 12px;
    white-space: nowrap;
}

.speech-bubble {
    position: absolute;
    top: -30px;
    background: white;
    color: black;
    padding: 5px 10px;
    border-radius: 15px;
    font-size: 12px;
    white-space: nowrap;
    animation: fadeOut 2s forwards;
}

.dead-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.dead-overlay img {
    width: 50px;
    height: auto;
    opacity: 0.7;
}

@keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
}
</style>