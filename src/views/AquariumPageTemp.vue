<template>
    <div class="aquarium">
        <TankBoard 
            ref="tankBoard"
            @add-fish="handleAddFish"
            @edit-fish="handleEditFish"
            @delete-fish="handleDeleteFish"
            @clean-tank="handleCleanTank"
            @options-changed="handleOptionsChanged"
        />
        <FishTank 
            ref="fishTank" 
            :selected-fish="selectedFish"
            :selected-mode="selectedMode"
            :options="tankOptions"
            @fish-clicked="handleFishClick"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import TankBoard from '../components/AquariumTemp/TankBoard.vue';
import FishTank from '../components/AquariumTemp/FishTank.vue';

const tankBoard = ref(null);
const fishTank = ref(null);
const selectedFish = ref(null);
const selectedMode = ref('select');
const tankOptions = ref({
    collision: false,
    growth: false,
    boid: false
});

const handleAddFish = (fish) => {
    if (fishTank.value.fishes.length >= 10) {
        alert('Maximum 10 fish allowed in the tank!');
        return;
    }
    fishTank.value.addFish(fish);
};

const handleEditFish = (fish) => {
    fishTank.value.editFish(fish);
    selectedFish.value = null;
};

const handleDeleteFish = (fish) => {
    fishTank.value.deleteFish(fish);
    selectedFish.value = null;
};

const handleCleanTank = () => {
    fishTank.value.cleanTank();
    selectedFish.value = null;
};

const handleFishClick = (fish) => {
    selectedFish.value = fish;
    tankBoard.value.setSelectedFish(fish);
};

const handleOptionsChanged = (options) => {
    tankOptions.value = options;
};
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