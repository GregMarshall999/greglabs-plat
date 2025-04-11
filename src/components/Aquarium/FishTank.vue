<template>
    <div class="fish-tank" ref="tankRef">
        <Fish
            v-for="(fish, index) in fishes"
            :key="index"
            :type="fish.type"
            :name="fish.name"
            :tank-ref="tankRef"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Fish from './Fish.vue';

const fishes = ref([]);
const tankRef = ref(null);

const addFish = fish => {
    fishes.value.push(fish);
}

defineExpose({
    addFish
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
}

</style>
