<template>
  <div class="projects-page">
    <div class="projects-inner">
      <!-- Skills Section -->
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

      <!-- Projects Grid Header -->
      <div class="projects-header">
        <div class="projects-header-text">
          <h2 class="projects-title">{{ $t('projectsPage.featuredWork') }}</h2>
          <p class="projects-subtitle">{{ $t('projectsPage.featuredWorkDesc') }}</p>
        </div>
        <div class="filter-buttons">
          <button
            v-for="type in filterTypes"
            :key="type.value"
            class="filter-btn"
            :class="{ active: filter === type.value }"
            @click="filter = type.value"
          >
            {{ $t(type.labelKey) }}
          </button>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="projects-grid">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="project-card"
        >
          <div class="project-image">
            <img :src="project.image" :alt="project.title" />
            <div class="project-tags-overlay">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="tag"
              >
                {{ tag }}
              </span>
            </div>
          </div>
          <div class="project-content">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-desc">{{ project.description }}</p>
            <div class="project-actions">
              <RouterLink
                v-if="project.routeName"
                :to="localePath({ name: project.routeName })"
                class="btn btn-primary"
              >
                {{ $t('projectsPage.viewCaseStudy') }}
              </RouterLink>
              <a
                v-if="project.liveUrl"
                :href="project.liveUrl"
                class="btn btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ $t('projectsPage.visitLiveSite') }}
              </a>
            </div>
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
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
import { useLocalePath } from '@/composables/useLocalePath';
import { useI18n } from 'vue-i18n';

const { localePath } = useLocalePath();
const { t } = useI18n();

const filter = ref('All');
const filterTypes = [
  { value: 'All', labelKey: 'projectsPage.filterAll' },
  { value: 'Web', labelKey: 'projectsPage.filterWeb' },
  { value: 'Mobile', labelKey: 'projectsPage.filterMobile' },
];

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

const projectsData = computed(() => [
  {
    id: 'growatt-modbus',
    title: t('home.growattModbus'),
    description: t('home.growattModbusDesc'),
    image: new URL('../assets/growatt-modbus/ba.jpg', import.meta.url).href,
    tags: ['Raspberry Pi', 'FastAPI', 'Python', 'Modbus'],
    category: 'Web',
    routeName: 'growatt-modbus',
    liveUrl: null,
  },
  {
    id: 'relays',
    title: t('home.relays'),
    description: t('home.relaysDesc'),
    image: new URL('../assets/relays/relays.jpg', import.meta.url).href,
    tags: ['Android', 'Java Spring', 'Arduino', 'IoT'],
    category: 'Mobile',
    routeName: 'relays',
    liveUrl: null,
  },
  {
    id: 'simubank',
    title: t('home.simubank'),
    description: t('home.simubankDesc'),
    image: new URL('../assets/icons/simubank.ico', import.meta.url).href,
    tags: ['Vue.js', 'Java Spring', 'PostgreSQL', 'Docker'],
    category: 'Web',
    routeName: null,
    liveUrl: 'https://simubank.greg-labs.com',
  },
  {
    id: 'en-recherche-active',
    title: t('home.enRechercheActive'),
    description: t('home.enRechercheActiveDesc'),
    image: new URL('../assets/icons/simubank.ico', import.meta.url).href,
    tags: ['Vue.js', 'Java Spring', 'MySQL'],
    category: 'Web',
    routeName: null,
    liveUrl: 'https://en-recherche-active.com',
  },
  {
    id: 'med-level',
    title: t('home.greglabsMedLevel'),
    description: t('home.greglabsMedLevelDesc'),
    image: new URL('../assets/icons/simubank.ico', import.meta.url).href,
    tags: ['Vue.js'],
    category: 'Web',
    routeName: 'med-level-movies',
    liveUrl: null,
  },
]);

const filteredProjects = computed(() => {
  const projects = projectsData.value;
  if (filter.value === 'All') return projects;
  return projects.filter((p) => p.category === filter.value);
});
</script>

<style scoped lang="scss">
@use '@/scss/variables' as *;

.projects-page {
  width: 100%;
  max-width: $max-w-7xl;
  padding: 3rem 1.5rem;
  @media (min-width: 768px) {
    padding: 6rem 1.5rem;
  }
}

.projects-inner {
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

.projects-header {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
}

.projects-title {
  font-size: 1.875rem;
  font-weight: 900;
  color: white;
  margin-bottom: 0.75rem;
}

.projects-subtitle {
  color: $slate-400;
}

.filter-buttons {
  display: flex;
  gap: 1rem;
  padding: 0.5rem;
  background: rgba($slate-800, 0.5);
  border-radius: $radius-xl;
  border: 1px solid $slate-800;
}

.filter-btn {
  padding: 0.5rem 1rem;
  border-radius: $radius-lg;
  font-size: 0.875rem;
  font-weight: 600;
  background: transparent;
  color: $slate-500;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: $slate-800;
  }
  &.active {
    background: $primary;
    color: white;
  }
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.project-card {
  display: flex;
  flex-direction: column;
  background: rgba($slate-800, 0.3);
  border: 1px solid $slate-800;
  border-radius: $radius-xl;
  overflow: hidden;
  transition: border-color 0.3s;
  &:hover {
    border-color: rgba($primary, 0.5);
  }
}

.project-image {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
  }
  .project-card:hover img {
    transform: scale(1.05);
  }
}

.project-tags-overlay {
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  padding: 0.25rem 0.5rem;
  background: rgba($background-dark, 0.8);
  backdrop-filter: blur(12px);
  color: white;
  font-size: 0.625rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-radius: $radius;
}

.project-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
  transition: color 0.2s;
  .project-card:hover & {
    color: $primary;
  }
}

.project-desc {
  color: $slate-400;
  font-size: 0.875rem;
  margin-bottom: 1rem;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.project-actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.btn {
  width: 100%;
  padding: 0.625rem 1rem;
  border-radius: $radius-lg;
  font-size: 0.875rem;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  transition: all 0.2s;
}

.btn-primary {
  background: $primary;
  color: white;
  border: none;
  &:hover {
    background: rgba($primary, 0.9);
  }
}

.btn-outline {
  background: transparent;
  color: white;
  border: 1px solid $slate-700;
  &:hover {
    background: $slate-800;
  }
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
