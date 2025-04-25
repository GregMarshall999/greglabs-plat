<template>
    <div class="tank-board">
        <TankOptions />
        <FishForm 
            :fish-count="fishCount" :edit-mode="editMode" 
            v-model="selectedFish"
            @addFish="fish => emits('addFish', fish)"
            @editFish="fish => emits('editFish', fish)"
            @removeFish="emits('removeFish')"
            @emptyTank="emits('emptyTank')"
        />
    </div>
</template>

<script setup>
import TankOptions from './TankOptions.vue';
import FishForm from './FishForm.vue';
import { ref } from 'vue';

const fishCount = ref(0);

const props = defineProps({
    fishCount: {
        type: Number,
        required: true
    }, 
    editMode: {
        type: Boolean,
        required: true
    }
});

const selectedFish = defineModel();

const emits = defineEmits(['addFish', 'editFish', 'removeFish', 'emptyTank']);
</script>

<style scoped>

.tank-board {
    background: #1a2438;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

</style>
