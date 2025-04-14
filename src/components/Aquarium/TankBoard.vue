<template>
    <div class="tank-board">
        <TankOptions />
        <FishForm />
    </div>
</template>

<script setup>
import TankOptions from './TankOptions.vue';
import FishForm from './FishForm.vue';
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
