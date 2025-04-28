<template>
    <div class="aquarium">
        <TankBoard v-if="tankRef" 
            :fish-count="tankRef.fishes.length" :edit-mode="editMode"
            v-model="selectedFish"
            @addFish="addFish"
            @editFish="editFish"
            @removeFish="removeFish"
            @emptyTank="tankRef.fishes = []"
            @unSelectFish="editMode = false"
        />
        <FishTank 
            ref="tankRef" 
            @fishClicked="handleFishClicked"
        />
    </div>
</template>

<script setup>
import TankBoard from '../components/Aquarium/TankBoard.vue';
import FishTank from '../components/Aquarium/FishTank.vue';
import { ref } from 'vue';

const editMode = ref(false);
const tankRef = ref(null);
const selectedFish = ref({});

//TODO: for some reason, while the fish is selected, selecting another fish type in the form changes it's properties before the edit button ic clicked
const addFish = () => {
    tankRef.value.fishes.push({ ...selectedFish.value }); //I would have thought the spread prevented this...
};
const editFish = () => {
    if(selectedFish.value.index !== undefined) {
        tankRef.value.fishes[selectedFish.value.index] = { ...selectedFish.value };
    }
    //TODO: Display error toast if index is not defined

    editMode.value = false;
};
const removeFish = () => {
    if(selectedFish.value.index !== undefined) {
        tankRef.value.fishes.splice(selectedFish.value.index, 1);
    }
    //TODO: Display error toast if index is not defined

    editMode.value = false;
}

const handleFishClicked = (fish, index) => {
    fish.index = index;
    selectedFish.value = fish;
    editMode.value = true;
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
