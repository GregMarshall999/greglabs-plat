<template>
    <div class="fish" :style="fishStyle" @click="fishClicked">
        <img :src="fishConfig.image" :alt="type"
            :style="{
                transform: `scaleX(${direction})`,
                transition: 'transform 0.3s ease'
            }"
        />
        <div v-if="shouldShowName" class="fish-name">{{ name }}</div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
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
    }
});

const position = ref({ x: 0, y: 0 });
const target = ref({ x: 0, y: 0 });
const direction = ref(1);

const fishConfig = computed(() => fishTypes[props.type] || fishTypes.goldfish);

const shouldShowName = computed(() => props.name);

const fishStyle = computed(() => {
    return ({
        position: 'absolute',
        left: `${position.value.x}px`,
        top: `${position.value.y}px`,
        transition: 'all 0.5s ease',
        cursor: 'pointer'
    })
});

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

const updatePosition = () => {
    const dx = target.value.x - position.value.x;
    const dy = target.value.y - position.value.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance < 5) {
        target.value = getRandomPosition();
        direction.value = target.value.x < position.value.x ? -1 : 1;
    } else {
        position.value.x += (dx / distance) * fishConfig.value.speed;
        position.value.y += (dy / distance) * fishConfig.value.speed;
    }
    
    //Requests a frame from the browser to animate the fish (js native function)
    requestAnimationFrame(updatePosition);
};

const fishClicked = () => {
    console.log('Fish clicked');
}

onMounted(() => {
    position.value = getRandomPosition();
    target.value = getRandomPosition();
    direction.value = target.value.x < position.value.x ? -1 : 1;
    updatePosition();
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

</style>