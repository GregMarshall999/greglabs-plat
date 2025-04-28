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
import { ref, onUnmounted } from 'vue';

const editMode = ref(false);
const tankRef = ref(null);
const selectedFish = ref({});
const id = ref(1);

//TODO: for some reason, while the fish is selected, selecting another fish type in the form changes it's properties before the edit button ic clicked
const addFish = () => {
    tankRef.value.fishes.push({ ...selectedFish.value, id: id.value++ }); //I would have thought the spread prevented this...
};
const editFish = () => {
    let foundFish = tankRef.value.fishes.find(fish => fish.id === selectedFish.value.id);

    if(foundFish) {
        foundFish = { ...selectedFish.value };
    }

    editMode.value = false;
};
const removeFish = () => {
    tankRef.value.fishes = tankRef.value.fishes.filter(fish => fish.id !== selectedFish.value.id);
    
    //TODO: Display error toast if index is not defined

    editMode.value = false;
}

const handleFishClicked = fish => {
    selectedFish.value = fish;
    editMode.value = true;
};

onUnmounted(() => {
    id.value = 1;
})

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
