<template>
    <nav>
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
@use '@/scss/variables';

nav {
    background-color: variables.$background-lighter;
    padding: 1rem 20%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}
</style>
