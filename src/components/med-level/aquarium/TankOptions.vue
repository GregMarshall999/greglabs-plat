<template>
  <div class="tank-options">
    <div class="fish-mode">
      <button
        :class="{ active: fishMode[0] }"
        @click="toggleFishMode(0)"
        disabled
        title="Coming soon"
      >
        Collision {{ fishMode[0] ? 'On' : 'Off' }}
      </button>
      <button
        :class="{ active: fishMode[1] }"
        @click="toggleFishMode(1)"
        disabled
        title="Coming soon"
      >
        Growth {{ fishMode[1] ? 'On' : 'Off' }}
      </button>
      <button
        :class="{ active: fishMode[2] }"
        @click="toggleFishMode(2)"
        disabled
        title="Coming soon"
      >
        Boid {{ fishMode[2] ? 'On' : 'Off' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

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

    &:disabled {
        cursor: not-allowed;
        background: #424447;
        color: #b6b0b0;
    }

    &.active {
        background: #0095c6;
    }
}

</style>
