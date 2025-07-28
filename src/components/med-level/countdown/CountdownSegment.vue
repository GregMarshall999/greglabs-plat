<template>
  <div class="segment">
    <div class="number-wrapper">
      <transition name="fall" mode="out-in">
        <span :key="number" class="number">{{ number }}</span>
      </transition>
    </div>
    <span class="block pt-2 label">{{ label }}</span>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  number: Number
});
</script>

<style scoped>
.segment {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
}

.number-wrapper {
  font-size: 32px;
  position: relative;
  overflow: hidden;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.number {
  display: inline-block;
  font-weight: bold;
}

/* Falling animation */
.fall-enter-active {
  animation: fallIn 0.6s ease-out;
}

.fall-leave-active {
  animation: fallOut 0.6s ease-in;
}

@keyframes fallIn {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  50% {
    transform: translateY(10%);
    opacity: 0.8;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fallOut {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(10%);
    opacity: 0.8;
  }
  100% {
    transform: translateY(100%);
    opacity: 0;
  }
}
</style>
