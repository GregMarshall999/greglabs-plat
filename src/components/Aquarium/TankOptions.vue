<template>
    <div class="tank-options">
        <div class="cursor-mode">
            <label>
                <input type="radio" v-model="cursorMode" value="Select" />
                Select
            </label>
            <label>
                <input type="radio" v-model="cursorMode" value="Rod" />
                Rod
            </label>
            <label>
                <input type="radio" v-model="cursorMode" value="Feed" />
                Feed
            </label>
        </div>

        <div class="fish-mode">
            <button :class="{ active: fishMode[0] }" @click="toggleFishMode(0)">
                Collision {{ fishMode[0] ? 'On' : 'Off' }}
            </button>
            <button :class="{ active: fishMode[1] }" @click="toggleFishMode(1)">
                Growth {{ fishMode[1] ? 'On' : 'Off' }}
            </button>
            <button :class="{ active: fishMode[2] }" @click="toggleFishMode(2)">
                Boid {{ fishMode[2] ? 'On' : 'Off' }}
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const cursorMode = ref('Select');

const fishMode = ref([false, false, false]);
const toggleFishMode = index => {
    fishMode.value[index] = !fishMode.value[index];
}
</script>

<style scoped>

.tank-options {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.cursor-mode {
    display: flex;
    justify-content: space-between;
}

.cursor-mode label {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
}

.fish-mode {
    display: flex;
    justify-content: space-between;
}

.fish-mode button {
    padding: 0.5em;
    border: none;
    border-radius: 5px;
    background: #2c3c56;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background: #111826;
    }

    &.active {
        background: #0095c6;
    }
}

</style>
