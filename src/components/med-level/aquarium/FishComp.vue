<template>
  <div
    v-if="fish"
    class="fish" 
    :style="fishStyle"
  >
    <img 
      :src="fish.image" 
      :alt="fish.type" 
      :style="{
        transform: `scaleX(${direction}) rotate(${tilt}deg)`,
        transition: 'transform 0.3s ease'
      }"
    >
    <div
      v-if="fish.name"
      class="fish-name"
    >
      {{ fish.name }}
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue';

const props = defineProps({
    fish: {
        type: Object,
        required: true
    }, 
    tankRef: {
        type: Object,
        required: true
    }, 
    food: {
        type: Array, 
        default: () => []
    }
});

const emit = defineEmits(['ateFood']);

const direction = ref(1);
const tilt = ref(0);
const size = ref(1);

const position = reactive({ x: 0, y: 0 });
const target = reactive({ x: 0, y: 0 });
const tracking = reactive({ id: null });

const fishStyle = computed(() => ({
    position: 'absolute',
    left: `${position.x}px`,
    top: `${position.y}px`,
    transition: 'all 0.5s ease',
    cursor: 'pointer',
    transform: `scale(${size.value})`,
    transformOrigin: 'center'
}));

const getRandomPosition = horizontal => {
    if(!props.tankRef) return 0;

    if(horizontal) {
        return Math.random() * (props.tankRef.clientWidth - 100);
    } else {
        return Math.random() * (props.tankRef.clientHeight - 100);
    }
};

const updatePosition = () => {
    // Check if there's food available
    if (props.food && props.food.length > 0 && tracking.id === null) {
        let closestFood = null;
        let minDistance = Infinity;
        
        // Find the closest food
        for (const foodItem of props.food) {
            const dx = foodItem.x - position.x;
            const dy = foodItem.y - position.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < minDistance) {
                minDistance = distance;
                closestFood = foodItem;
            }
        }
        
        // If we found food, set it as target
        if (closestFood) {
            target.x = closestFood.x;
            target.y = closestFood.y;
            tracking.id = closestFood.id;
            direction.value = target.x < position.x ? -1 : 1;
        }
    }

    const dx = target.x - position.x;
    const dy = target.y - position.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    tilt.value = Math.min(Math.max(dy * 0.1, -15), 15);

    //fish reached target
    if(tracking.id === null && distance < 5) {
        target.x = getRandomPosition(true);
        target.y = getRandomPosition(false);
        direction.value = target.x < position.x ? -1 : 1;
    }
    //fish ate food
    else if(distance < 1) {
        target.x = getRandomPosition(true);
        target.y = getRandomPosition(false);
        direction.value = target.x < position.x ? -1 : 1;

        emit('ateFood', tracking.id);
        tracking.id = null;
    }
    //fish is swimming
    else {
        position.x += (dx / distance) * props.fish.speed;
        position.y += (dy / distance) * props.fish.speed;
    }

    requestAnimationFrame(updatePosition);
}

onMounted(() => {
    position.x = getRandomPosition(true);

    target.x = getRandomPosition(true);
    target.y = getRandomPosition(false);
    direction.value = target.x < position.x ? -1 : 1;

    updatePosition();
});

</script>

<style scoped>

.fish {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
}

img {
    width: 100px;
    height: auto;
}

.fish-name {
    position: absolute;
    bottom: -20px;
    background: rgba(0, 0, 0, 0.7);
    padding: 2px 8px;
    border-radius: 10px;
    font-size: 12px;
    white-space: nowrap;
}

</style>
