<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-content">
          <div class="hero-text">
            <div class="hero-badge">
              <span class="material-symbols-outlined">verified</span>
              <span class="mono-text">{{ $t('common.availableForOpportunities') }}</span>
            </div>
            <h1 class="hero-title">
              {{ $t('home.title') }}
              <span class="text-primary">{{ $t('home.subtitle') }}</span>
            </h1>
            <p class="hero-description">
              {{ $t('home.descriptionIntro') }}
              {{ $t('home.descriptionWelcome') }}
              {{ $t('home.descriptionExplore') }}
            </p>
            <div class="cta-buttons">
              <RouterLink
                :to="localePath({ name: 'growatt-modbus' })"
                class="btn btn-primary"
              >
                <span>{{ $t('common.viewLatestProject') }}</span>
                <span class="material-symbols-outlined">arrow_forward</span>
              </RouterLink>
              <RouterLink
                :to="localePath({ name: 'contact' })"
                class="btn btn-secondary"
              >
                <span class="material-symbols-outlined">mail</span>
                <span>{{ $t('common.getInTouch') }}</span>
              </RouterLink>
            </div>
            <div class="tech-stack">
              <span class="tech-stack-label mono-text">{{ $t('common.coreStack') }}</span>
              <div class="tech-badges">
                <div
                  v-for="tech in techStack"
                  :key="tech.name"
                  class="tech-badge"
                >
                  <span class="material-symbols-outlined tech-icon">{{ tech.icon }}</span>
                  <span class="mono-text">{{ tech.name }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="hero-visual">
            <div class="hero-image-wrapper">
              <div class="hero-image-placeholder">
                <span class="material-symbols-outlined">code</span>
              </div>
              <div class="hero-floating-card">
                <div class="floating-card-icon">
                  <span class="material-symbols-outlined">bolt</span>
                </div>
                <div class="floating-card-text">
                  <p class="floating-card-title">{{ $t('home.currentProject') }}</p>
                  <p class="floating-card-sub mono-text">Growatt Modbus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Expertise Section -->
    <section id="skills" class="expertise">
      <div class="expertise-inner">
        <div class="expertise-header">
          <h2 class="expertise-title">{{ $t('common.keyExpertise') }}</h2>
          <p class="expertise-subtitle">{{ $t('home.about1') }}</p>
        </div>
        <div class="expertise-grid">
          <div
            v-for="(skill, idx) in expertiseData"
            :key="idx"
            class="expertise-card"
          >
            <div class="expertise-icon">
              <span class="material-symbols-outlined">{{ skill.icon }}</span>
            </div>
            <div class="expertise-content">
              <h3 class="expertise-card-title">{{ skill.title }}</h3>
              <p class="expertise-card-desc">{{ skill.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="projects">
      <div class="projects-inner">
        <h2 class="projects-title">{{ $t('home.featuredProjects') }}</h2>
        <div class="projects-grid">
          <div class="project-card">
            <div class="project-image">
              <img src="../assets/icons/simubank.ico" :alt="$t('home.simubankAlt')" class="simubank-icon" />
              <div class="project-tags-overlay">
                <span>Vue.js</span>
                <span>Java Spring</span>
              </div>
            </div>
            <div class="project-content">
              <h3>{{ $t('home.simubank') }}</h3>
              <p>{{ $t('home.simubankDesc') }}</p>
              <a href="https://simubank.greg-labs.com" class="btn btn-project" target="_blank" rel="noopener noreferrer">{{ $t('common.viewProject') }}</a>
            </div>
          </div>
          <div class="project-card">
            <div class="project-image">
              <img src="../assets/relays/relays.jpg" :alt="$t('home.relaysAlt')" />
              <div class="project-tags-overlay">
                <span>Android</span>
                <span>Arduino</span>
              </div>
            </div>
            <div class="project-content">
              <h3>{{ $t('home.relays') }}</h3>
              <p>{{ $t('home.relaysDesc') }}</p>
              <RouterLink :to="localePath({ name: 'relays' })" class="btn btn-project">{{ $t('common.viewProject') }}</RouterLink>
            </div>
          </div>
          <div class="project-card">
            <div class="project-image">
              <img src="../assets/growatt-modbus/ba.jpg" :alt="$t('home.growattModbusAlt')" />
              <div class="project-tags-overlay">
                <span>Raspberry Pi</span>
                <span>Python</span>
              </div>
            </div>
            <div class="project-content">
              <h3>{{ $t('home.growattModbus') }}</h3>
              <p>{{ $t('home.growattModbusDesc') }}</p>
              <RouterLink :to="localePath({ name: 'growatt-modbus' })" class="btn btn-project">{{ $t('common.viewProject') }}</RouterLink>
            </div>
          </div>
        </div>
        <RouterLink :to="localePath({ name: 'projects' })" class="projects-link">
          {{ $t('nav.projects') }}
          <span class="material-symbols-outlined">arrow_forward</span>
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { useLocalePath } from '@/composables/useLocalePath';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { localePath } = useLocalePath();
const { t } = useI18n();

const techStack = [
  { name: 'TypeScript', icon: 'code' },
  { name: 'Vue.js', icon: 'layers' },
  { name: 'Java', icon: 'database' },
  { name: 'Python', icon: 'token' },
  { name: 'Docker', icon: 'token' },
];

const expertiseData = computed(() => [
  { title: t('home.frontend'), description: t('home.frontendTech'), icon: 'code' },
  { title: t('home.backend'), description: t('home.backendTech'), icon: 'database' },
  { title: t('home.mobile'), description: t('home.mobileTech'), icon: 'phone_android' },
  { title: t('home.tools'), description: t('home.toolsTech'), icon: 'build' },
]);
</script>

<style scoped lang="scss">
@use '@/scss/variables' as *;

.home-page {
  width: 100%;
}

.hero {
  width: 100%;
  max-width: $max-w-7xl;
  padding: 6rem 1.5rem 4rem;
  @media (min-width: 768px) {
    padding: 8rem 1.5rem 6rem;
  }
}

.hero-inner {
  width: 100%;
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 3rem;
  }
}

.hero-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.75rem;
  border-radius: $radius-full;
  background: rgba($primary, 0.1);
  border: 1px solid rgba($primary, 0.2);
  color: $primary;
  width: fit-content;
  .material-symbols-outlined {
    font-size: 1rem;
  }
  .mono-text {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
}

.hero-title {
  font-size: 3rem;
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.025em;
  color: white;
  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
}

.text-primary {
  color: $primary;
}

.hero-description {
  font-size: 1.125rem;
  color: $slate-400;
  max-width: 600px;
  line-height: 1.6;
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
}

.cta-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 700;
  border-radius: $radius-xl;
  text-decoration: none;
  transition: all 0.2s;
  &:active {
    transform: scale(0.98);
  }
}

.btn-primary {
  background: $primary;
  color: white;
  border: none;
  &:hover {
    box-shadow: 0 10px 25px rgba($primary, 0.25);
  }
}

.btn-secondary {
  background: $slate-800;
  color: white;
  border: 1px solid $slate-700;
  &:hover {
    background: $slate-700;
  }
}

.tech-stack {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.tech-stack-label {
  font-size: 0.75rem;
  font-weight: 700;
  color: $slate-500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.tech-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.tech-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  height: 2.5rem;
  padding: 0 1rem;
  border-radius: $radius-lg;
  background: $slate-800;
  border: 1px solid $slate-700;
  transition: border-color 0.2s;
  &:hover {
    border-color: $primary;
  }
}

.tech-icon {
  color: $primary;
  font-size: 1.25rem;
}

.tech-badge .mono-text {
  font-size: 0.875rem;
  font-weight: 500;
}

.hero-visual {
  width: 100%;
  flex-shrink: 0;
  @media (min-width: 1024px) {
    width: 480px;
  }
}

.hero-image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  border-radius: $radius-3xl;
  overflow: hidden;
  border: 1px solid $slate-800;
  background: $slate-900;
  padding: 1rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

.hero-image-placeholder {
  width: 100%;
  height: 100%;
  border-radius: $radius-2xl;
  border: 1px solid $slate-800;
  background: linear-gradient(135deg, $slate-800 0%, $slate-900 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  .material-symbols-outlined {
    font-size: 4rem;
    color: $slate-600;
  }
}

.simubank-icon {
  width: 50px !important;
  height: 50px !important;
  object-fit: contain;
}

.hero-floating-card {
  position: absolute;
  bottom: 2.5rem;
  left: 2.5rem;
  right: 2.5rem;
  padding: 1.5rem;
  border-radius: $radius-2xl;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  gap: 1rem;
}

.floating-card-icon {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: $primary;
  display: flex;
  align-items: center;
  justify-content: center;
  .material-symbols-outlined {
    color: white;
  }
}

.floating-card-title {
  font-size: 0.875rem;
  font-weight: 700;
  color: white;
}

.floating-card-sub {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
}

/* Expertise Section */
.expertise {
  width: 100%;
  max-width: $max-w-7xl;
  padding: 6rem 1.5rem;
  border-top: 1px solid $slate-800;
}

.expertise-inner {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.expertise-header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
}

.expertise-title {
  font-size: 1.875rem;
  font-weight: 900;
  letter-spacing: -0.025em;
  color: white;
  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
}

.expertise-subtitle {
  color: $slate-400;
  max-width: 720px;
}

.expertise-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.expertise-card {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2rem;
  border-radius: $radius-2xl;
  border: 1px solid $slate-800;
  background: rgba($slate-900, 0.5);
  transition: border-color 0.2s;
  &:hover {
    border-color: rgba($primary, 0.5);
  }
}

.expertise-icon {
  width: 3rem;
  height: 3rem;
  border-radius: $radius-xl;
  background: $slate-800;
  display: flex;
  align-items: center;
  justify-content: center;
  color: $primary;
  transition: all 0.2s;
  .expertise-card:hover & {
    background: $primary;
    color: white;
  }
}

.expertise-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.expertise-card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
}

.expertise-card-desc {
  color: $slate-400;
  font-size: 0.875rem;
  line-height: 1.6;
}

/* Projects Section */
.projects {
  width: 100%;
  max-width: $max-w-7xl;
  padding: 6rem 1.5rem;
}

.projects-inner {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
}

.projects-title {
  font-size: 2rem;
  font-weight: 900;
  color: white;
  text-align: center;
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 100%;
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
  gap: 0.5rem;
  span {
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
}

.project-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    color: white;
    transition: color 0.2s;
    .project-card:hover & {
      color: $primary;
    }
  }
  p {
    color: $slate-400;
    font-size: 0.875rem;
    flex: 1;
  }
}

.btn-project {
  width: 100%;
  padding: 0.625rem 1rem;
  margin-top: 0.75rem;
  background: $primary;
  color: white;
  font-size: 0.875rem;
  font-weight: 700;
  border-radius: $radius-lg;
  text-align: center;
  transition: background-color 0.2s;
  &:hover {
    background: rgba($primary, 0.9);
  }
}

.projects-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: $primary;
  font-weight: 700;
  text-decoration: none;
  transition: gap 0.2s;
  &:hover {
    gap: 0.75rem;
  }
}
</style>
