<template>
    <div class="fish-form">
        <h3>Add a Fish</h3>
        
        <div class="fish-selection">
            <div 
                v-for="(fish, type) in fishTypes" :key="type"
                class="fish-option" :class="{ selected: selectedType === type }"
                @click="selectFish(type)"
            >
                <img :src="fish.image" :alt="type">
                <span>{{ fish.label }}</span>
            </div>
        </div>
        
        <div class="name-input">
            <input v-model="fishName" type="text" placeholder="Fish name (optional)">
        </div>
        
        <button @click="addFish" :disabled="!selectedType" class="add-button">
            Add Fish
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { fishTypes } from '../../config/fishConfig';

const emit = defineEmits(['add-fish']);

const selectedType = ref('');
const fishName = ref('');

const selectFish = type => {
    selectedType.value = type;
}

const addFish = () => {
    if (selectedType.value) {
        emit('add-fish', {
            type: selectedType.value,
            name: fishName.value.trim()
        });
        fishName.value = '';
    }
}
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

.fish-option.selected {
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
}

.fish-option img {
    width: 80px;
    height: auto;
    margin-bottom: 8px;
}

.fish-option span {
    font-size: 14px;
    text-align: center;
    color: white;
}

.name-input {
    margin: 20px 0;
}

.name-input input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.add-button {
    width: 100%;
    padding: 10px;
    background: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
        background: #45a049;
    }   

    &:disabled {
        background: #cccccc;
        cursor: not-allowed;
    }
}

</style>
