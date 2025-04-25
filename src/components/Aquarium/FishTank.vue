<template>
    <div class="fish-tank" ref="tankRef">
        <Fish 
            v-for="(fish, index) in fishes"
            :key="index"
            :fish="fish"
            :tankRef="tankRef"
            @click="emit('fishClicked', fish, index)"
        />
    </div>
</template>

<script setup>
import Fish from './Fish.vue';
import { ref } from 'vue';

const emit = defineEmits(['fishClicked']);

const fishes = ref([]);
const tankRef = ref(null);

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
