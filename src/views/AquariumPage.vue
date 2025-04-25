<template>
    <div class="aquarium">
        <TankBoard v-if="tankRef" 
            :fish-count="tankRef.fishes.length" :edit-mode="editMode"
            v-model="selectedFish"
            @addFish="addFish"
            @editFish="fish => console.log('editFish', fish)"
            @removeFish="console.log('removeFish')"
            @emptyTank="console.log('emptyTank')"
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
import { fishTypes } from '../config/fishConfig';

const editMode = ref(false);
const tankRef = ref(null);
const selectedFish = ref({});

const addFish = fish => {
    const newFish = {
        ...fish,
        image: fishTypes[fish.type].image,
        type: fish.type,
        speed: fishTypes[fish.type].speed
    };

    tankRef.value.fishes.push(newFish);
};

const handleFishClicked = (fish, index) => {
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
