<template>
  <nav :class="{ 'nav-med-level': projectGroup === 'med-level' }">
    <BaseNav v-if="projectGroup === 'base'" />
    <MedLevelNav v-else-if="projectGroup === 'med-level'" />
  </nav>
</template>

<script setup>
import BaseNav from './BaseNav.vue';
import MedLevelNav from './MedLevelNav.vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const projectGroup = computed(() => route.meta.projectGroup);
</script>

<style scoped lang="scss">
@use '@/scss/variables' as *;

nav.nav-med-level {
  background-color: $slate-800;
  padding: 1rem 20%;
  border-bottom: 1px solid $slate-800;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}
</style>
