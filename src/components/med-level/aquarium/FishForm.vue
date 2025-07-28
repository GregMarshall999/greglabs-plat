<template>
    <form @submit.prevent="handleFishForm" class="fish-form">
        <h3>{{ formMessage }}</h3>

        <div class="fish-selection" @click="unSelectFish">
            <div v-for="(fish, type) in fishTypes" :key="type"
                class="fish-option" :class="{ selected: selectedFish.type === type }"
                @click="selectFish(type)"
            >
                <img :src="fish.image" :alt="type" />
                <span>{{ fish.label }}</span>
            </div>
        </div>

        <div class="fish-properties">
            <div class="selected-fish-info" v-if="selectedFish.type">
                <img :src="selectedFish.image" :alt="selectedFish.type" />
                <div class="fish-details">
                    <h4>{{ selectedFish.type }}</h4>
                    <p>Speed: {{ selectedFish.speed }}</p>
                </div>
            </div>

            <input v-model="fishName" type="text" placeholder="Fish name (optional)" />

            <div class="action-buttons">
                <button v-if="fishActionText" @click="emptyTankButtonClicked = false" :disabled="!selectedFish.type" class="fish-button">
                    {{ fishActionText }}
                </button>

                <button @click="emptyTankButtonClicked = true" :disabled="fishCount === 0" class="tank-button">
                    {{ tankActionText }}
                </button>
            </div>
        </div>
    </form>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { fishTypes } from '@/config/med-level/fishConfig';

const messages = [
    'Select a fish:'
];

const formMessage = ref(messages[0]);
const fishName = ref('');

const selectedFish = defineModel();

const prop = defineProps({
    fishCount: {
        type: Number,
        required: true
    }, 
    editMode: {
        type: Boolean,
        required: true
    }
});

const selectFish = type => {
    selectedFish.value.image = fishTypes[type].image;
    selectedFish.value.type = type;
    selectedFish.value.speed = fishTypes[type].speed;
};
const unSelectFish = e => {
    if (e.target.classList.contains('fish-selection')) {
        selectedFish.value = {};
        emits('unSelectFish');
    }
};

const emptyTankButtonClicked = ref(false);
const fishActionText = computed(() => prop.editMode ? "Edit Fish" : "Add Fish");
const tankActionText = computed(() => prop.editMode ? "Remove Fish" : "Empty Tank");
const emits = defineEmits(['addFish', 'editFish', 'removeFish', 'emptyTank', 'unSelectFish']);

const handleFishForm = () => {
    if(emptyTankButtonClicked.value) {
        prop.editMode ? emits('removeFish') : emits('emptyTank');
    }
    else {
        selectedFish.value.name = fishName.value;
        prop.editMode ? emits('editFish') : emits('addFish');
    }

    selectedFish.value = {};
}

watch(selectedFish, (newVal) => {
    if(newVal.name) {
        fishName.value = newVal.name;
    }
    else {
        fishName.value = '';
    }
});

</script>

<style scoped>

.fish-form {
    padding: 20px;
    background: #1a2438;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.fish-selection {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin: 20px 0;
}

.fish-option {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    padding: 15px;
    border-radius: 8px;
    transition: all 0.3s ease;

    &:hover {
        background: rgba(255, 255, 255, 0.2);
    }
}

.selected {
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
}

.fish-option > img {
    width: 80px;
    height: auto;
    margin-bottom: 8px;
}

span {
    font-size: 14px;
    text-align: center;
    color: white;
}

.fish-properties {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.selected-fish-info {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 10px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
}

.selected-fish-info > img {
    width: 60px;
    height: auto;
}

h4 {
    margin: 0;
}

p {
    margin: 5px 0 0;
}

input {
    margin: 5px 0;
    width: 100%;
    padding: 8px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.1);
    color: white;
}

.action-buttons {
    display: flex;
    gap: 10px;
}

button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        opacity: 0.9;
    }

    &:disabled {
        background: #cccccc;
        cursor: not-allowed;
    }
}

.fish-button {
    flex: 1;
    background: #4CAF50;
    color: white;  
}

.tank-button {
    width: 100%;
    background: #ff9800;
    color: white;
}

</style>
