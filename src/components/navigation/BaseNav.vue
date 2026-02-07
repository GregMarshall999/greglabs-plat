<template>
  <header class="base-nav">
    <div class="nav-inner">
      <RouterLink
        :to="localePath({ name: 'home' })"
        class="nav-logo"
        aria-label="Greg-Labs Home"
      >
        <div class="nav-logo-icon">
          <span class="material-symbols-outlined">terminal</span>
        </div>
        <span class="nav-logo-text mono-text">{{ $t('nav.home') }}</span>
      </RouterLink>

      <nav class="nav-links">
        <RouterLink
          :to="localePath({ name: 'projects' })"
          class="nav-link"
          :class="{ active: isActive('projects') }"
        >
          {{ $t('nav.projects') }}
        </RouterLink>
        <RouterLink
          :to="localePath({ name: 'home' })"
          class="nav-link"
          :class="{ active: isActive('home') }"
        >
          {{ $t('nav.skills') }}
        </RouterLink>
        <RouterLink
          :to="localePath({ name: 'contact' })"
          class="nav-link"
          :class="{ active: isActive('contact') }"
        >
          {{ $t('nav.contact') }}
        </RouterLink>
      </nav>

      <div class="nav-actions">
        <a
          href="#"
          class="nav-resume-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="material-symbols-outlined">description</span>
          Resume
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { useRoute } from 'vue-router';
import { useLocalePath } from '@/composables/useLocalePath';
import { computed } from 'vue';

const route = useRoute();
const { localePath } = useLocalePath();

function isActive(routeName) {
  if (routeName === 'projects') {
    return route.name === 'projects' || route.name === 'relays' || route.name === 'growatt-modbus';
  }
  return route.name === routeName;
}
</script>

<style scoped lang="scss">
@use '@/scss/variables' as *;

.base-nav {
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  border-bottom: 1px solid $slate-800;
  background: rgba(16, 22, 34, 0.8);
  backdrop-filter: blur(12px);
}

.nav-inner {
  max-width: $max-w-7xl;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: inherit;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.8;
  }
}

.nav-logo-icon {
  width: 2rem;
  height: 2rem;
  background: $primary;
  border-radius: $radius-lg;
  display: flex;
  align-items: center;
  justify-content: center;
  .material-symbols-outlined {
    color: white;
    font-size: 1.25rem;
  }
}

.nav-logo-text {
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -0.025em;
}

.nav-links {
  display: none;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 2.5rem;
  }
}

.nav-link {
  font-size: 0.875rem;
  font-weight: 500;
  color: $slate-400;
  text-decoration: none;
  transition: color 0.2s;
  &:hover,
  &.active {
    color: $primary;
  }
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.nav-resume-btn {
  display: none;
  @media (min-width: 640px) {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    font-weight: 700;
    background: $slate-800;
    color: inherit;
    border-radius: $radius-lg;
    text-decoration: none;
    transition: background-color 0.2s;
    &:hover {
      background: $slate-700;
    }
  }
  .material-symbols-outlined {
    font-size: 1.25rem;
  }
}
</style>
