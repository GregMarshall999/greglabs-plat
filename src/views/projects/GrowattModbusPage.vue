<template>
  <div class="growatt-modbus-page">
    <!-- Hero Section -->
    <section class="project-hero">
      <div class="project-hero-image">
        <img :src="imgBa" :alt="$t('projects.growattModbus.title')" />
        <div class="project-hero-overlay"></div>
        <div class="project-hero-content">
          <nav class="project-hero-breadcrumb">
            <RouterLink :to="localePath({ name: 'projects' })" class="breadcrumb-link">{{ $t('nav.projects') }}</RouterLink>
            <span class="material-symbols-outlined breadcrumb-chevron">chevron_right</span>
            <span>{{ $t('projects.growattModbus.title') }}</span>
          </nav>
          <h1 class="project-hero-title">{{ $t('projects.growattModbus.title') }}</h1>
        </div>
      </div>
    </section>

    <!-- Overview Section -->
    <section class="overview">
      <div class="section-content">
        <h2>{{ $t('projects.growattModbus.overview') }}</h2>
        <div class="overview-text">
          <p>{{ $t('projects.growattModbus.overview1') }}</p>
          <p>{{ $t('projects.growattModbus.overview2') }}</p>
          <p>{{ $t('projects.growattModbus.overview3') }}</p>
        </div>
      </div>
    </section>

    <!-- Architecture Section -->
    <section class="architecture">
      <div class="section-content">
        <h2>{{ $t('projects.growattModbus.architecture') }}</h2>
        <div class="architecture-flow">
          <div class="arch-component">
            <div class="arch-icon">
              <i class="fas fa-sun" />
            </div>
            <h3>{{ $t('projects.growattModbus.growattInverter') }}</h3>
            <p>{{ $t('projects.growattModbus.growattInverterDesc') }}</p>
          </div>
          <div class="arch-arrow">→</div>
          <div class="arch-component">
            <div class="arch-icon">
              <i class="fas fa-database" />
            </div>
            <h3>{{ $t('projects.growattModbus.modbusReader') }}</h3>
            <p>{{ $t('projects.growattModbus.modbusReaderDesc') }}</p>
          </div>
          <div class="arch-arrow">→</div>
          <div class="arch-component">
            <div class="arch-icon">
              <i class="fas fa-server" />
            </div>
            <h3>{{ $t('projects.growattModbus.httpBackend') }}</h3>
            <p>{{ $t('projects.growattModbus.httpBackendDesc') }}</p>
          </div>
          <div class="arch-arrow">→</div>
          <div class="arch-component">
            <div class="arch-icon">
              <i class="fas fa-mobile-alt" />
            </div>
            <h3>{{ $t('projects.growattModbus.androidApp') }}</h3>
            <p>{{ $t('projects.growattModbus.androidAppDesc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="section-content">
        <h2>{{ $t('projects.growattModbus.features') }}</h2>
        <div class="features-grid">
          <div class="feature-card">
            <i class="fas fa-bolt" />
            <h3>{{ $t('projects.growattModbus.modbusRead') }}</h3>
            <p>{{ $t('projects.growattModbus.modbusReadDesc') }}</p>
          </div>
          <div class="feature-card">
            <i class="fas fa-code" />
            <h3>{{ $t('projects.growattModbus.httpApi') }}</h3>
            <p>{{ $t('projects.growattModbus.httpApiDesc') }}</p>
          </div>
          <div class="feature-card">
            <i class="fas fa-mobile-alt" />
            <h3>{{ $t('projects.growattModbus.androidDisplay') }}</h3>
            <p>{{ $t('projects.growattModbus.androidDisplayDesc') }}</p>
          </div>
          <div class="feature-card">
            <i class="fas fa-sync-alt" />
            <h3>{{ $t('projects.growattModbus.realtimeData') }}</h3>
            <p>{{ $t('projects.growattModbus.realtimeDataDesc') }}</p>
          </div>
          <div class="feature-card">
            <i class="fas fa-chart-line" />
            <h3>{{ $t('projects.growattModbus.solarMetrics') }}</h3>
            <p>{{ $t('projects.growattModbus.solarMetricsDesc') }}</p>
          </div>
          <div class="feature-card">
            <i class="fas fa-wifi" />
            <h3>{{ $t('projects.growattModbus.localOrRemote') }}</h3>
            <p>{{ $t('projects.growattModbus.localOrRemoteDesc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="gallery">
      <div class="section-content">
        <h2>{{ $t('projects.growattModbus.gallery') }}</h2>
        <p class="gallery-intro">
          {{ $t('projects.growattModbus.galleryIntro') }}
        </p>
        <div class="gallery-grid">
          <div class="gallery-item">
            <img
              :src="imgBa"
              :alt="$t('projects.growattModbus.galleryBa')"
              @click="openLightbox(imgBa)"
            />
            <p>{{ $t('projects.growattModbus.captionBa') }}</p>
          </div>
          <div class="gallery-item">
            <img
              :src="imgGwi"
              :alt="$t('projects.growattModbus.galleryGwi')"
              @click="openLightbox(imgGwi)"
            />
            <p>{{ $t('projects.growattModbus.captionGwi') }}</p>
          </div>
          <div class="gallery-item">
            <img
              :src="imgIdd"
              :alt="$t('projects.growattModbus.galleryIdd')"
              @click="openLightbox(imgIdd)"
            />
            <p>{{ $t('projects.growattModbus.captionIdd') }}</p>
          </div>
          <div class="gallery-item">
            <img
              :src="imgInd"
              :alt="$t('projects.growattModbus.galleryInd')"
              @click="openLightbox(imgInd)"
            />
            <p>{{ $t('projects.growattModbus.captionInd') }}</p>
          </div>
          <div class="gallery-item">
            <img
              :src="imgRbp"
              :alt="$t('projects.growattModbus.galleryRbp')"
              @click="openLightbox(imgRbp)"
            />
            <p>{{ $t('projects.growattModbus.captionRbp') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Future Expansion Section -->
    <section class="future">
      <div class="section-content">
        <h2>{{ $t('projects.growattModbus.future') }}</h2>
        <div class="future-grid">
          <div class="future-card">
            <i class="fas fa-chart-area" />
            <h3>{{ $t('projects.growattModbus.historyCharts') }}</h3>
            <p>{{ $t('projects.growattModbus.historyChartsDesc') }}</p>
          </div>
          <div class="future-card">
            <i class="fas fa-bell" />
            <h3>{{ $t('projects.growattModbus.alerts') }}</h3>
            <p>{{ $t('projects.growattModbus.alertsDesc') }}</p>
          </div>
          <div class="future-card">
            <i class="fas fa-th-large" />
            <h3>{{ $t('projects.growattModbus.multiInverter') }}</h3>
            <p>{{ $t('projects.growattModbus.multiInverterDesc') }}</p>
          </div>
          <div class="future-card">
            <i class="fas fa-file-export" />
            <h3>{{ $t('projects.growattModbus.exportData') }}</h3>
            <p>{{ $t('projects.growattModbus.exportDataDesc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <div
      v-if="lightboxImage"
      class="lightbox"
      @click="closeLightbox"
    >
      <span class="lightbox-close">&times;</span>
      <img :src="lightboxImage" :alt="$t('projects.growattModbus.lightboxAlt')" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useLocalePath } from '@/composables/useLocalePath';
import imgBa from '@/assets/growatt-modbus/ba.jpg';
import imgGwi from '@/assets/growatt-modbus/gwi.jpg';
import imgIdd from '@/assets/growatt-modbus/idd.jpg';
import imgInd from '@/assets/growatt-modbus/ind.jpg';
import imgRbp from '@/assets/growatt-modbus/rbp.jpg';

const { localePath } = useLocalePath();
const lightboxImage = ref(null);

const openLightbox = (image) => {
  lightboxImage.value = image;
  document.body.style.overflow = 'hidden';
};

const closeLightbox = () => {
  lightboxImage.value = null;
  document.body.style.overflow = 'auto';
};
</script>

<style scoped lang="scss">
@use '@/scss/variables' as *;

.growatt-modbus-page {
  width: 100%;
  max-width: $max-w-7xl;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}

/* Hero Section */
.project-hero {
  width: 100%;
  margin-bottom: 3rem;
}

.project-hero-image {
  position: relative;
  width: 100%;
  aspect-ratio: 21 / 9;
  overflow: hidden;
  border-radius: $radius-xl;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

.project-hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba($background-dark, 0.8) 0%, transparent 50%, transparent 100%);
}

.project-hero-content {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 2rem;
}

.project-hero-breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.5rem;
}

.breadcrumb-link {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s;
  &:hover {
    color: white;
  }
}

.breadcrumb-chevron {
  font-size: 0.75rem !important;
}

.project-hero-title {
  font-size: 2.25rem;
  font-weight: 800;
  color: white;
  letter-spacing: -0.025em;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
}

/* Section Content */
.section-content {
  max-width: $max-w-7xl;
  margin: 0 auto;
  padding: 0 1.5rem;
}

section {
  padding: 5rem 0;
}

section h2 {
  text-align: center;
  margin-bottom: 2.5rem;
  color: $slate-400;
  font-size: 2rem;
  font-weight: 700;
}

/* Overview Section */
.overview {
  border-top: 1px solid $slate-800;
}

.overview-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: $slate-300;
  margin-bottom: 1.25rem;
  max-width: 56rem;
  margin-left: auto;
  margin-right: auto;
}

/* Architecture Section */
.architecture-flow {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 40px;
}

.arch-component {
  background: rgba($slate-800, 0.5);
  border: 1px solid $slate-800;
  padding: 1.875rem 1.25rem;
  border-radius: $radius-xl;
  text-align: center;
  min-width: 11.25rem;
  max-width: 12.5rem;
  transition: transform 0.3s ease, border-color 0.2s;
}

.arch-component:hover {
  transform: translateY(-5px);
  border-color: rgba($primary, 0.5);
}

.arch-icon {
  font-size: 2.5rem;
  color: $primary;
  margin-bottom: 0.9375rem;
}

.arch-component h3 {
  color: white;
  font-size: 1.1rem;
  margin-bottom: 0.625rem;
}

.arch-component p {
  color: $slate-400;
  font-size: 0.9rem;
  line-height: 1.5;
}

.arch-arrow {
  font-size: 2rem;
  color: $primary;
  font-weight: bold;
}

/* Features Section */
.features {
  border-top: 1px solid $slate-800;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.feature-card {
  background: rgba($slate-800, 0.5);
  border: 1px solid $slate-800;
  padding: 1.875rem;
  border-radius: $radius-xl;
  text-align: center;
  transition: transform 0.3s ease, border-color 0.2s;
}

.feature-card:hover {
  transform: translateY(-5px);
  border-color: rgba($primary, 0.5);
}

.feature-card i {
  font-size: 2.5rem;
  color: $primary;
  margin-bottom: 1.25rem;
}

.feature-card h3 {
  color: white;
  margin-bottom: 0.9375rem;
  font-size: 1.3rem;
}

.feature-card p {
  color: $slate-400;
  line-height: 1.6;
}

/* Gallery Section */
.gallery {
  border-top: 1px solid $slate-800;
}

.gallery-intro {
  font-size: 1.1rem;
  line-height: 1.8;
  color: $slate-300;
  margin-bottom: 30px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.gallery-item {
  background: rgba($slate-800, 0.5);
  border: 1px solid $slate-800;
  border-radius: $radius-xl;
  overflow: hidden;
  transition: transform 0.3s ease, border-color 0.2s;
}

.gallery-item:hover {
  transform: translateY(-5px);
  border-color: rgba($primary, 0.5);
}

.gallery-item img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.gallery-item img:hover {
  opacity: 0.8;
}

.gallery-item p {
  padding: 1rem;
  color: white;
  text-align: center;
  margin: 0;
}

/* Future Section */
.future {
  border-top: 1px solid $slate-800;
}

.future-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.future-card {
  background: rgba($slate-800, 0.5);
  border: 1px solid $slate-800;
  padding: 1.875rem;
  border-radius: $radius-xl;
  text-align: center;
  transition: transform 0.3s ease, border-color 0.2s;
}

.future-card:hover {
  transform: translateY(-5px);
  border-color: rgba($primary, 0.5);
}

.future-card i {
  font-size: 2.5rem;
  color: $primary;
  margin-bottom: 1.25rem;
}

.future-card h3 {
  color: white;
  margin-bottom: 0.9375rem;
  font-size: 1.2rem;
}

.future-card p {
  color: $slate-400;
  line-height: 1.6;
  font-size: 0.95rem;
}

/* Lightbox */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
}

.lightbox img {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
}

.lightbox-close {
  position: absolute;
  top: 20px;
  right: 40px;
  color: #ffffff;
  font-size: 3rem;
  font-weight: bold;
  cursor: pointer;
  z-index: 1001;
}

.lightbox-close:hover {
  color: $primary;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1.2rem;
  }

  .description {
    font-size: 1rem;
  }

  section h2 {
    font-size: 2rem;
  }

  .architecture-flow {
    flex-direction: column;
  }

  .arch-arrow {
    transform: rotate(90deg);
    margin: 10px 0;
  }

  .arch-component {
    max-width: 100%;
  }

  .features-grid,
  .future-grid {
    grid-template-columns: 1fr;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .lightbox-close {
    top: 10px;
    right: 20px;
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .hero {
    min-height: 40vh;
    padding: 40px 0;
  }

  .hero-content h1 {
    font-size: 2rem;
  }

  section {
    padding: 60px 0;
  }

  .overview-text p {
    font-size: 1rem;
  }
}
</style>
