<template>
    <div class="aquarium">
        <FishForm @add-fish="handleAddFish" />
        <FishTank ref="fishTank" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import FishTank from '../components/Aquarium/FishTank.vue';
import FishForm from '../components/Aquarium/FishForm.vue';

const fishTank = ref(null);

const handleAddFish = fish => {
    fishTank.value.addFish(fish);
}
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