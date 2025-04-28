<template>
    <div class="fish-tank" ref="tankRef" @click="handleTankClick">
        <Fish 
            v-for="(fish, index) in fishes"
            :key="index"
            :fish="fish"
            :tankRef="tankRef"
            @click="emit('fishClicked', fish, index)"
        />
        <Food
            v-for="(food, index) in foods"
            :key="index"
            :foodPos="food"
            @destroy="handleDestroy(index)"
        />
    </div>
</template>

<script setup>
import Fish from './Fish.vue';
import Food from './Food.vue';
import { ref } from 'vue';

const emit = defineEmits(['fishClicked']);

const fishes = ref([]);
const foods = ref([]);
const tankRef = ref(null);

const handleDestroy = index => {
    foods.value.splice(index, 1);
}

const handleTankClick = event => {
    const rect = tankRef.value.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    foods.value.push({ x, y });
};

defineExpose({
    fishes
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

</style>
