<template>
  <div class="growatt-modbus-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>{{ $t('projects.growattModbus.title') }}</h1>
        <p class="subtitle">
          {{ $t('projects.growattModbus.subtitle') }}
        </p>
        <p class="description">
          {{ $t('projects.growattModbus.description') }}
        </p>
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
import imgBa from '@/assets/growatt-modbus/ba.jpg';
import imgGwi from '@/assets/growatt-modbus/gwi.jpg';
import imgIdd from '@/assets/growatt-modbus/idd.jpg';
import imgInd from '@/assets/growatt-modbus/ind.jpg';
import imgRbp from '@/assets/growatt-modbus/rbp.jpg';

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

<style scoped>
.growatt-modbus-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Hero Section */
.hero {
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 60px 0;
}

.hero-content h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.subtitle {
  font-size: 1.5rem;
  color: #42b983;
  margin-bottom: 1rem;
}

.description {
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
}

/* Section Content */
.section-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

section {
  padding: 80px 0;
}

section h2 {
  text-align: center;
  margin-bottom: 40px;
  color: #71808f;
  font-size: 2.5rem;
}

/* Overview Section */
.overview {
  background-color: #1a2438;
}

.overview-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #ffffff;
  margin-bottom: 20px;
  max-width: 900px;
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
  background: #2c3c56;
  padding: 30px 20px;
  border-radius: 10px;
  text-align: center;
  min-width: 180px;
  max-width: 200px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.arch-component:hover {
  transform: translateY(-5px);
}

.arch-icon {
  font-size: 2.5rem;
  color: #42b983;
  margin-bottom: 15px;
}

.arch-component h3 {
  color: #ffffff;
  font-size: 1.1rem;
  margin-bottom: 10px;
}

.arch-component p {
  color: #71808f;
  font-size: 0.9rem;
  line-height: 1.5;
}

.arch-arrow {
  font-size: 2rem;
  color: #42b983;
  font-weight: bold;
}

/* Features Section */
.features {
  background-color: #1a2438;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.feature-card {
  background: #2c3c56;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-card i {
  font-size: 2.5rem;
  color: #42b983;
  margin-bottom: 20px;
}

.feature-card h3 {
  color: #ffffff;
  margin-bottom: 15px;
  font-size: 1.3rem;
}

.feature-card p {
  color: #71808f;
  line-height: 1.6;
}

/* Gallery Section */
.gallery {
  background-color: #1a2438;
}

.gallery-intro {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #ffffff;
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
  background: #1a2438;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-5px);
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
  padding: 15px;
  color: #ffffff;
  text-align: center;
  margin: 0;
}

/* Future Section */
.future {
  background-color: #1a2438;
}

.future-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.future-card {
  background: #2c3c56;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.future-card:hover {
  transform: translateY(-5px);
}

.future-card i {
  font-size: 2.5rem;
  color: #42b983;
  margin-bottom: 20px;
}

.future-card h3 {
  color: #ffffff;
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.future-card p {
  color: #71808f;
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
  color: #42b983;
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
