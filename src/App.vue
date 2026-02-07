<template>
  <div class="app-layout">
    <div class="grid-pattern app-decoration" aria-hidden="true"></div>
    <div class="gradient-glow app-decoration" aria-hidden="true"></div>

    <NavigationBar />
    <main class="main-content">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { provide } from 'vue';
import NavigationBar from './components/navigation/NavigationBar.vue';
import AppFooter from './components/AppFooter.vue';
import { useLocalePath } from './composables/useLocalePath';

const { localePath } = useLocalePath();
provide('localePath', localePath);
</script>

<style lang="scss">
@use '@/scss/variables' as *;

.app-layout {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}

.app-decoration {
  position: absolute;
  top: 0;
  left: 0;
}

.grid-pattern.app-decoration {
  inset: 0;
}

.gradient-glow.app-decoration {
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 600px;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container {
  max-width: $max-w-7xl;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 2em;
}
</style>