<template>
  <div class="skills-page">
    <div class="skills-inner">
      <div class="skills-header">
        <h1 class="skills-title">{{ $t('projectsPage.technicalArsenal') }}</h1>
        <p class="skills-desc">{{ $t('projectsPage.technicalArsenalDesc') }}</p>
      </div>

      <div class="skills-grid">
        <div
          v-for="(cat, idx) in skillCategories"
          :key="idx"
          class="skill-card"
        >
          <div class="skill-card-header">
            <span class="material-symbols-outlined skill-icon">{{ cat.icon }}</span>
            <h3 class="skill-card-title">{{ cat.title }}</h3>
          </div>
          <div class="skill-tags">
            <span
              v-for="skill in cat.skills"
              :key="skill"
              class="skill-tag"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>

      <!-- Contact CTA -->
      <div class="contact-cta">
        <div class="cta-text">
          <h4 class="cta-title">{{ $t('projectsPage.haveProjectInMind') }}</h4>
          <p class="cta-desc">{{ $t('projectsPage.haveProjectInMindDesc') }}</p>
        </div>
        <div class="cta-actions">
          <RouterLink :to="localePath({ name: 'contact' })" class="cta-icon-btn" aria-label="Contact">
            <span class="material-symbols-outlined">alternate_email</span>
          </RouterLink>
          <a href="https://github.com/GregMarshall999" target="_blank" rel="noopener noreferrer" class="cta-icon-btn" aria-label="GitHub">
            <span class="material-symbols-outlined">link</span>
          </a>
          <RouterLink :to="localePath({ name: 'contact' })" class="cta-primary-btn">
            {{ $t('common.getInTouch') }}
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import { useLocalePath } from '@/composables/useLocalePath';
import { useI18n } from 'vue-i18n';

const { localePath } = useLocalePath();
const { t } = useI18n();

const skillCategories = computed(() => [
  {
    title: t('home.frontend'),
    icon: 'web',
    skills: ['Vue.js', 'React', 'TypeScript', 'SASS', 'HTML5'],
  },
  {
    title: t('home.backend'),
    icon: 'database',
    skills: ['Java Spring', 'Python', 'FastAPI', 'PostgreSQL', 'MySQL'],
  },
  {
    title: t('home.tools'),
    icon: 'build',
    skills: ['Docker', 'Git', 'CI/CD', 'Arduino', 'Raspberry Pi'],
  },
]);
</script>

<style scoped lang="scss">
@use '@/scss/variables' as *;

.skills-page {
  width: 100%;
  max-width: $max-w-7xl;
  padding: 3rem 1.5rem;
  @media (min-width: 768px) {
    padding: 6rem 1.5rem;
  }
}

.skills-inner {
  width: 100%;
}

.skills-header {
  margin-bottom: 3rem;
}

.skills-title {
  font-size: 2.25rem;
  font-weight: 900;
  letter-spacing: -0.025em;
  color: white;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
}

.skills-desc {
  font-size: 1.125rem;
  color: $slate-400;
  max-width: 42rem;
  line-height: 1.6;
}

.skills-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 6rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.skill-card {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1.5rem;
  border-radius: $radius-xl;
  background: rgba($slate-800, 0.4);
  border: 1px solid $slate-800;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.skill-card-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.skill-icon {
  color: $primary;
  font-size: 1.5rem;
}

.skill-card-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: white;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  padding: 0.25rem 0.75rem;
  border-radius: $radius-lg;
  background: $slate-800;
  font-size: 0.875rem;
  font-weight: 500;
  color: $slate-300;
}

.contact-cta {
  margin-top: 6rem;
  padding-top: 3rem;
  border-top: 1px solid $slate-800;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
}

.cta-text {
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
}

.cta-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
}

.cta-desc {
  color: $slate-400;
}

.cta-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.cta-icon-btn {
  padding: 0.75rem;
  border-radius: $radius-full;
  background: $slate-800;
  border: 1px solid $slate-700;
  color: inherit;
  text-decoration: none;
  transition: color 0.2s, border-color 0.2s;
  &:hover {
    color: $primary;
  }
  .material-symbols-outlined {
    font-size: 1.5rem;
    display: block;
  }
}

.cta-primary-btn {
  padding: 0.75rem 2rem;
  background: $primary;
  color: white;
  font-weight: 700;
  border-radius: $radius-xl;
  text-decoration: none;
  transition: background-color 0.2s;
  &:hover {
    background: rgba($primary, 0.9);
  }
}
</style>
