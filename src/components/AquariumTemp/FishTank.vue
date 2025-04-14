<template>
    <div class="fish-tank" ref="tankRef" 
        @click="handleTankClick" @mousemove="handleMouseMove"
    >
        <Fish
            v-for="(fish, index) in fishes"
            :key="index"
            :type="fish.type"
            :name="fish.name"
            :tank-ref="tankRef"
            :is-selected="selectedFish === fish"
            :rod-position="rodPosition"
            :food-pieces="foodPieces"
            :mode="selectedMode"
            :other-fish="otherFish(fish)"
            :options="options"
            @click="handleFishClick(fish)"
            @death="handleFishDeath"
        />
        
        <img 
            v-if="selectedMode === 'rod'"
            class="fishing-rod"
            :src="'/aquarium/rod.png'"
            :style="rodStyle"
        />
        
        <div 
            v-for="(food, index) in foodPieces" 
            :key="'food-' + index"
            class="food-piece"
            :style="food.style"
        >
            <img :src="'/aquarium/fishfood.png'" alt="Food">
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import Fish from './Fish.vue';

const props = defineProps({
    selectedFish: {
        type: Object,
        default: null
    },
    selectedMode: {
        type: String,
        default: 'select'
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

const emit = defineEmits(['fish-clicked']);

const fishes = ref([]);
const tankRef = ref(null);
const rodPosition = ref({ x: 0, y: 0 });
const foodPieces = ref([]);
const foodInterval = ref(null);

const rodStyle = computed(() => ({
    left: `${rodPosition.value.x}px`,
    top: `${rodPosition.value.y}px`,
    transform: `rotate(${rodPosition.value.angle}deg)`,
    transformOrigin: '0 0'
}));

const otherFish = (currentFish) => {
    return fishes.value.map(fish => ({
        ...fish,
        position: fish.position,
        velocity: fish.velocity || { x: 0, y: 0 }
    })).filter(fish => fish !== currentFish);
};

const handleMouseMove = (event) => {
    if (props.selectedMode === 'rod') {
        const rect = tankRef.value.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        const boundedX = Math.max(0, Math.min(x, rect.width - 100));
        const boundedY = Math.max(0, Math.min(y, rect.height - 100));
        
        rodPosition.value = {
            x: boundedX,
            y: boundedY,
            angle: Math.atan2(y - boundedY, x - boundedX) * (180 / Math.PI)
        };
    }
};

const handleTankClick = (event) => {
    if (event.target === tankRef.value) {
        if (props.selectedMode === 'select') {
            emit('fish-clicked', null);
        } else if (props.selectedMode === 'feed') {
            const rect = tankRef.value.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            
            foodPieces.value.push({
                x,
                y,
                style: {
                    left: `${x}px`,
                    top: `${y}px`
                }
            });
        }
    }
};

const updateFood = () => {
    foodPieces.value = foodPieces.value.map(food => {
        const newY = food.y + 1;
        return {
            ...food,
            y: newY,
            style: {
                ...food.style,
                top: `${newY}px`
            }
        };
    }).filter(food => food.y < tankRef.value.clientHeight);
};

const handleFishDeath = (deadFish) => {
    const index = fishes.value.findIndex(fish => fish === deadFish);
    if (index !== -1) {
        fishes.value.splice(index, 1);
    }
};

onMounted(() => {
    foodInterval.value = setInterval(updateFood, 50);
});

onUnmounted(() => {
    if (foodInterval.value) {
        clearInterval(foodInterval.value);
    }
});

const addFish = (fish) => {
    fishes.value.push(fish);
};

const editFish = (fish) => {
    const index = fishes.value.findIndex(f => f === props.selectedFish);
    if (index !== -1) {
        fishes.value[index] = fish;
    }
};

const deleteFish = (fish) => {
    const index = fishes.value.findIndex(f => f === fish);
    if (index !== -1) {
        fishes.value.splice(index, 1);
    }
};

const cleanTank = () => {
    fishes.value = [];
    foodPieces.value = [];
};

const handleFishClick = (fish) => {
    emit('fish-clicked', fish);
};

defineExpose({
    fishes,
    addFish,
    editFish,
    deleteFish,
    cleanTank
});
</script>

<style scoped>
.fish-tank {
    position: relative;
    width: 100%;
    height: 80vh;
    background-image: url('/aquarium/bg.jpg');
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    cursor: pointer;
}

.fishing-rod {
    position: absolute;
    width: 100px;
    height: auto;
    pointer-events: none;
    transition: all 0.1s ease;
}

.food-piece {
    position: absolute;
    width: 30px;
    height: 30px;
    pointer-events: none;
    transition: all 0.1s ease;
}

.food-piece img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
</style>
