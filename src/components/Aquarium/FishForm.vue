<template>
    <div class="fish-form">
        <h3>{{ formTitle }}</h3>
        
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
        
        <div v-if="selectedType" class="fish-properties">
            <div class="selected-fish-info">
                <img :src="fishTypes[selectedType].image" :alt="selectedType">
                <div class="fish-details">
                    <h4>{{ fishTypes[selectedType].label }}</h4>
                    <p>Speed: {{ fishTypes[selectedType].speed }}</p>
                </div>
            </div>

            <div class="name-input">
                <input v-model="fishName" type="text" placeholder="Fish name (optional)">
            </div>

            <div class="action-buttons">
                <button @click="handleAction" :disabled="!selectedType" class="action-button">
                    {{ actionButtonText }}
                </button>
                
                <button 
                    v-if="selectedFish"
                    @click="handleDelete"
                    class="delete-button"
                >
                    Delete Fish
                </button>
            </div>
        </div>

        <button @click="cleanTank" class="clean-button">
            Clean Tank
        </button>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { fishTypes } from '../../config/fishConfig';

const props = defineProps({
    selectedFish: {
        type: Object,
        default: null
    }
});

const emit = defineEmits(['add-fish', 'edit-fish', 'delete-fish', 'clean-tank']);

const selectedType = ref('');
const fishName = ref('');

const formTitle = computed(() => 
    props.selectedFish ? 'Edit Fish' : 'Add a Fish'
);

const actionButtonText = computed(() => 
    props.selectedFish ? 'Edit Fish' : 'Add Fish'
);

const selectFish = type => {
    selectedType.value = type;
}

const handleAction = () => {
    if (!selectedType.value) return;

    const fishData = {
        type: selectedType.value,
        name: fishName.value.trim()
    };

    if (props.selectedFish) {
        emit('edit-fish', { ...props.selectedFish, ...fishData });
    } else {
        emit('add-fish', fishData);
    }

    selectedType.value = '';
    fishName.value = '';
}

const handleDelete = () => {
    if (props.selectedFish) {
        emit('delete-fish', props.selectedFish);
    }
}

const cleanTank = () => {
    emit('clean-tank');
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

.selected-fish-info img {
    width: 60px;
    height: auto;
}

.fish-details h4 {
    margin: 0;
    color: white;
}

.fish-details p {
    margin: 5px 0 0;
    color: rgba(255, 255, 255, 0.7);
}

.name-input {
    margin: 20px 0;
}

.name-input input {
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

.action-button, .delete-button, .clean-button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.action-button {
    flex: 1;
    background: #4CAF50;
    color: white;
}

.action-button:disabled {
    background: #cccccc;
    cursor: not-allowed;
}

.delete-button {
    background: #f44336;
    color: white;
}

.clean-button {
    width: 100%;
    background: #ff9800;
    color: white;
}

.action-button:hover, .delete-button:hover, .clean-button:hover {
    opacity: 0.9;
}
</style>
