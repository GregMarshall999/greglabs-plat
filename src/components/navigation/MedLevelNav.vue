<template>
  <div class="navbar-content">
    <div class="logo">
      <h1
        @click="router.push(localePath({ name: 'home' }))"
        :title="$t('medLevel.nav.backToHome')"
      >
        {{ $t('medLevel.nav.title') }}
      </h1>
    </div>
    <ul class="nav-links">
      <li>
        <RouterLink
          :to="localePath({ name: 'med-level-movies' })"
          class="nav-link"
        >
          {{ $t('medLevel.nav.movies') }}
        </RouterLink>
      </li>
      <li>
        <RouterLink
          :to="localePath({ name: 'med-level-countdown' })"
          class="nav-link"
        >
          {{ $t('medLevel.nav.countdown') }}
        </RouterLink>
      </li>
      <li>
        <RouterLink
          :to="localePath({ name: 'med-level-shopping-cart' })"
          class="nav-link"
        >
          {{ $t('medLevel.nav.shoppingCart') }}
        </RouterLink>
      </li>
      <li class="dropdown">
        <button class="nav-link dropdown-toggle">
          {{ $t('medLevel.nav.otherChallenges') }}
        </button>
        <ul class="dropdown-menu">
          <li>
            <RouterLink
              :to="localePath({ name: 'med-level-tic-tac-toe' })"
              class="nav-link"
            >
              {{ $t('medLevel.nav.ticTacToe') }}
            </RouterLink>
          </li>
          <li>
            <RouterLink
              :to="localePath({ name: 'med-level-aquarium' })"
              class="nav-link"
            >
              {{ $t('medLevel.nav.aquarium') }}
            </RouterLink>
          </li>
          <li>
            <RouterLink
              :to="localePath({ name: 'med-level-quiz' })"
              class="nav-link"
            >
              {{ $t('medLevel.nav.quiz') }}
            </RouterLink>
          </li>
          <li>
            <RouterLink
              :to="localePath({ name: 'med-level-task' })"
              class="nav-link"
            >
              {{ $t('medLevel.nav.task') }}
            </RouterLink>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { useLocalePath } from '@/composables/useLocalePath';

const router = useRouter();
const { localePath } = useLocalePath();
</script>

<style scoped lang="scss">
@use '@/scss/variables' as *;

.navbar-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    cursor: pointer;
}

.nav-links {
    display: flex;
    list-style: none;
    align-items: center;
    gap: 1.5rem;
}

.nav-link {
    color: white;
    text-decoration: none;
    font-weight: 500;
    padding: 0.5rem 0.75rem;
    border-radius: $radius;
    transition: background-color 0.2s, color 0.2s;
}

.nav-link:hover,
:deep(.router-link-active) {
    background-color: $slate-800;
    color: $primary;
}

.dropdown {
    position: relative;
    z-index: 1000;
}

.dropdown-toggle {
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    padding: 0.5rem 0.75rem;
}

.dropdown-menu {
    list-style: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: $slate-800;
    border-radius: $radius;
    padding: 0.5rem 0;
    min-width: 200px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
    transition: opacity 0.2s, visibility 0.2s, transform 0.2s;
}

.dropdown:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.dropdown-menu .nav-link {
    display: block;
    padding: 0.5rem 1rem;
    white-space: nowrap;
}

.dropdown-menu .nav-link:hover {
    background-color: $slate-700;
}

</style>