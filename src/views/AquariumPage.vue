<template>
    <div class="aquarium">
        <TankBoard />
        <FishTank />
    </div>
</template>

<script setup>
import TankBoard from '../components/Aquarium/TankBoard.vue';
import FishTank from '../components/Aquarium/FishTank.vue';
</script>

<style scoped>

.aquarium {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 20px;
}

</style>
