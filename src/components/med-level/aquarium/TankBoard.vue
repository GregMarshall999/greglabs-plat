<template>
    <div class="tank-board">
        <TankOptions />
        <FishForm 
            :fish-count="fishCount" :edit-mode="editMode" 
            v-model="selectedFish"
            @addFish="emits('addFish')"
            @editFish="emits('editFish')"
            @removeFish="emits('removeFish')"
            @emptyTank="emits('emptyTank')"
            @unSelectFish="emits('unSelectFish')"
        />
    </div>
</template>

<script setup>
import TankOptions from './TankOptions.vue';
import FishForm from './FishForm.vue';

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

const emits = defineEmits(['addFish', 'editFish', 'removeFish', 'emptyTank', 'unSelectFish']);
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
