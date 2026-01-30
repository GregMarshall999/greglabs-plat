<template>
  <div class="locale-switcher">
    <button
      type="button"
      class="locale-btn"
      :class="{ active: locale === 'en' }"
      :aria-pressed="locale === 'en'"
      @click="setLocale('en')"
    >
      EN
    </button>
    <span class="locale-sep">|</span>
    <button
      type="button"
      class="locale-btn"
      :class="{ active: locale === 'fr' }"
      :aria-pressed="locale === 'fr'"
      @click="setLocale('fr')"
    >
      FR
    </button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { STORAGE_KEY } from '@/i18n';

const router = useRouter();
const { locale } = useI18n();

function setLocale(newLocale) {
  const fullPath = router.currentRoute.value.fullPath;
  const basePath = fullPath.replace(/^\/fr/, '') || '/';
  let newPath;
  if (newLocale === 'fr') {
    newPath = basePath === '/' ? '/fr' : `/fr${basePath}`;
  } else {
    newPath = basePath;
  }
  locale.value = newLocale;
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, newLocale);
  }
  if (router.currentRoute.value.fullPath !== newPath) {
    router.push(newPath);
  }
}
</script>

<style scoped>
.locale-switcher {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-bottom: 0.5rem;
}
.locale-btn {
  background: none;
  border: 1px solid #71808f;
  color: #71808f;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s;
}
.locale-btn:hover {
  border-color: #42b983;
  color: #42b983;
}
.locale-btn.active {
  background: #42b983;
  border-color: #42b983;
  color: #1a2438;
}
.locale-sep {
  color: #71808f;
  font-size: 0.875rem;
}
</style>
