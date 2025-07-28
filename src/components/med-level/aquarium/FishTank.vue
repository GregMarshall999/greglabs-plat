<template>
    <div class="fish-tank" ref="tankRef" @click="handleTankClick">
        <Fish 
            v-for="fish in fishes"
            :key="fish.id"
            :fish="fish"
            :tankRef="tankRef"
            :food="foods"
            @click="emit('fishClicked', fish)"
            @ateFood="id => handleDestroy(id)"
        />
        <Food
            v-for="food in foods"
            :key="food.id"
            :foodPos="food"
            @destroy="handleDestroy(food.id)"
        />
    </div>
</template>

<script setup>
import Fish from './Fish.vue';
import Food from './Food.vue';
import { ref, onUnmounted } from 'vue';

const emit = defineEmits(['fishClicked']);

const fishes = ref([]);
const foods = ref([]);
const tankRef = ref(null);
const id = ref(1);

const handleDestroy = id => {
    foods.value = foods.value.filter(food => food.id !== id);
}

const handleTankClick = event => {
    if(event.target.classList.contains('fish-tank')) {
        const rect = tankRef.value.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        foods.value.push({ x, y, id: id.value++ });
    }
};

defineExpose({
    fishes
});

onUnmounted(() => {
    id.value = 1;
})

</script>

<style scoped>

.fish-tank {
    position: relative;
    width: 100%;
    height: 80vh;
    background-image: url('/src/assets/med-level/aquarium/bg.jpg');
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    cursor: pointer;
}

</style>
