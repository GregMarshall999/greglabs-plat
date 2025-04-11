<template>
	<div class="tank-board">
		<div class="tank-modes">
			<div class="mode-options">
				<label v-for="mode in modes" :key="mode.value">
					<input type="radio" v-model="selectedMode" :value="mode.value" />
					{{ mode.label }}
				</label>
			</div>
			<div class="tank-options">
				<button v-for="option in options" :key="option.value"
					:class="{ active: option.active }" @click="toggleOption(option.value)"
				>
					{{ option.label }}
				</button>
			</div>
		</div>
		
		<FishForm 
			:selected-fish="selectedFish"
			@add-fish="handleAddFish"
			@edit-fish="handleEditFish"
			@delete-fish="handleDeleteFish"
			@clean-tank="handleCleanTank"
		/>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import FishForm from './FishForm.vue';

const emit = defineEmits(['add-fish', 'edit-fish', 'delete-fish', 'clean-tank']);

const modes = [
	{ value: 'select', label: 'Select' },
	{ value: 'rod', label: 'Rod' },
	{ value: 'feed', label: 'Feed' }
];

const options = ref([
	{ value: 'collision', label: 'Collision', active: false },
	{ value: 'growth', label: 'Growth', active: false },
	{ value: 'boid', label: 'Boid', active: false }
]);

const selectedMode = ref('select');
const selectedFish = ref(null);

const toggleOption = (optionValue) => {
	const option = options.value.find(opt => opt.value === optionValue);
	if (option) {
		option.active = !option.active;
	}
};

const handleAddFish = (fish) => {
  	emit('add-fish', fish);
};

const handleEditFish = (fish) => {
  	emit('edit-fish', fish);
};

const handleDeleteFish = (fish) => {
  	emit('delete-fish', fish);
};

const handleCleanTank = () => {
  	emit('clean-tank');
};

defineExpose({
	setSelectedFish: (fish) => {
		selectedFish.value = fish;
	}
});
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

.tank-modes {
	display: flex;
	flex-direction: column;
	gap: 15px;
}

.mode-options {
	display: flex;
	gap: 20px;
}

.mode-options label {
	display: flex;
	align-items: center;
	gap: 5px;
	color: white;
	cursor: pointer;
}

.tank-options {
	display: flex;
	gap: 10px;
}

.tank-options button {
	padding: 8px 15px;
	border: none;
	border-radius: 5px;
	background: rgba(255, 255, 255, 0.1);
	color: white;
	cursor: pointer;
	transition: all 0.3s ease;
}

.tank-options button.active {
  	background: rgba(255, 255, 255, 0.3);
}

.tank-options button:hover {
  	background: rgba(255, 255, 255, 0.2);
}
</style> 