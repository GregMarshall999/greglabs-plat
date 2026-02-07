<template>
  <div class="relays-page">
    <!-- Hero Section -->
    <section class="project-hero">
      <div class="project-hero-image">
        <img :src="relaysMain" :alt="$t('projects.relays.title')" />
        <div class="project-hero-overlay"></div>
        <div class="project-hero-content">
          <nav class="project-hero-breadcrumb">
            <RouterLink :to="localePath({ name: 'projects' })" class="breadcrumb-link">{{ $t('nav.projects') }}</RouterLink>
            <span class="material-symbols-outlined breadcrumb-chevron">chevron_right</span>
            <span>{{ $t('projects.relays.title') }}</span>
          </nav>
          <h1 class="project-hero-title">{{ $t('projects.relays.title') }}</h1>
        </div>
      </div>
    </section>

    <!-- Overview Section -->
    <section class="overview">
      <div class="section-content">
        <h2>{{ $t('projects.relays.overview') }}</h2>
        <div class="overview-text">
          <p>{{ $t('projects.relays.overview1') }}</p>
          <p>{{ $t('projects.relays.overview2') }}</p>
          <p>{{ $t('projects.relays.overview3') }}</p>
        </div>
      </div>
    </section>

    <!-- Architecture Section -->
    <section class="architecture">
      <div class="section-content">
        <h2>{{ $t('projects.relays.architecture') }}</h2>
        <div class="architecture-flow">
          <div class="arch-component">
            <div class="arch-icon">
              <i class="fas fa-mobile-alt" />
            </div>
            <h3>{{ $t('projects.relays.androidApp') }}</h3>
            <p>{{ $t('projects.relays.androidAppDesc') }}</p>
          </div>
          <div class="arch-arrow">→</div>
          <div class="arch-component">
            <div class="arch-icon">
              <i class="fas fa-server" />
            </div>
            <h3>{{ $t('projects.relays.javaBackend') }}</h3>
            <p>{{ $t('projects.relays.javaBackendDesc') }}</p>
          </div>
          <div class="arch-arrow">→</div>
          <div class="arch-component">
            <div class="arch-icon">
              <i class="fas fa-network-wired" />
            </div>
            <h3>{{ $t('projects.relays.localNetwork') }}</h3>
            <p>{{ $t('projects.relays.localNetworkDesc') }}</p>
          </div>
          <div class="arch-arrow">→</div>
          <div class="arch-component">
            <div class="arch-icon">
              <i class="fas fa-microchip" />
            </div>
            <h3>{{ $t('projects.relays.arduino') }}</h3>
            <p>{{ $t('projects.relays.arduinoDesc') }}</p>
          </div>
          <div class="arch-arrow">→</div>
          <div class="arch-component">
            <div class="arch-icon">
              <i class="fas fa-plug" />
            </div>
            <h3>{{ $t('projects.relays.relays16') }}</h3>
            <p>{{ $t('projects.relays.relays16Desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="section-content">
        <h2>{{ $t('projects.relays.features') }}</h2>
        <div class="features-grid">
          <div class="feature-card">
            <i class="fas fa-shield-alt" />
            <h3>{{ $t('projects.relays.secureAuth') }}</h3>
            <p>{{ $t('projects.relays.secureAuthDesc') }}</p>
          </div>
          <div class="feature-card">
            <i class="fas fa-mobile-alt" />
            <h3>{{ $t('projects.relays.androidAppFeature') }}</h3>
            <p>{{ $t('projects.relays.androidAppFeatureDesc') }}</p>
          </div>
          <div class="feature-card">
            <i class="fas fa-plug" />
            <h3>{{ $t('projects.relays.relayChannels') }}</h3>
            <p>{{ $t('projects.relays.relayChannelsDesc') }}</p>
          </div>
          <div class="feature-card">
            <i class="fas fa-touch" />
            <h3>{{ $t('projects.relays.localControl') }}</h3>
            <p>{{ $t('projects.relays.localControlDesc') }}</p>
          </div>
          <div class="feature-card">
            <i class="fas fa-wifi" />
            <h3>{{ $t('projects.relays.wifiConnectivity') }}</h3>
            <p>{{ $t('projects.relays.wifiConnectivityDesc') }}</p>
          </div>
          <div class="feature-card">
            <i class="fas fa-sync-alt" />
            <h3>{{ $t('projects.relays.realtimeStatus') }}</h3>
            <p>{{ $t('projects.relays.realtimeStatusDesc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Android Interface Section -->
    <section class="android-interface">
      <div class="section-content">
        <h2>{{ $t('projects.relays.androidInterface') }}</h2>
        <p class="android-interface-intro">
          {{ $t('projects.relays.androidInterfaceIntro') }}
        </p>
        <div class="gallery-grid">
          <div class="gallery-item">
            <img
              :src="relaysInterface"
              :alt="$t('projects.relays.galleryMainInterface')"
              @click="openLightbox(relaysInterface)"
            />
            <p>{{ $t('projects.relays.captionMainInterface') }}</p>
          </div>
          <div class="gallery-item">
            <img
              :src="relayReg"
              :alt="$t('projects.relays.galleryRegister')"
              @click="openLightbox(relayReg)"
            />
            <p>{{ $t('projects.relays.captionRegister') }}</p>
          </div>
          <div class="gallery-item">
            <img
              :src="relayEdit"
              :alt="$t('projects.relays.galleryEdit')"
              @click="openLightbox(relayEdit)"
            />
            <p>{{ $t('projects.relays.captionEdit') }}</p>
          </div>
          <div class="gallery-item">
            <img
              :src="relayEmod"
              :alt="$t('projects.relays.galleryEditMode')"
              @click="openLightbox(relayEmod)"
            />
            <p>{{ $t('projects.relays.captionEditMode') }}</p>
          </div>
          <div class="gallery-item">
            <img
              :src="relayDmod"
              :alt="$t('projects.relays.galleryDelete')"
              @click="openLightbox(relayDmod)"
            />
            <p>{{ $t('projects.relays.captionDelete') }}</p>
          </div>
          <div class="gallery-item">
            <img
              :src="relayPage"
              :alt="$t('projects.relays.galleryRelayPage')"
              @click="openLightbox(relayPage)"
            />
            <p>{{ $t('projects.relays.captionRelayPage') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="gallery">
      <div class="section-content">
        <h2>{{ $t('projects.relays.gallery') }}</h2>
        <div class="gallery-grid">
          <div class="gallery-item gallery-item-previous">
            <div class="gallery-item-blur-wrap">
              <img 
                :src="relaysApp01" 
                :alt="$t('projects.relays.galleryApp1')"
              />
              <span class="gallery-item-previous-label">{{ $t('projects.relays.previousVersion') }}</span>
            </div>
            <p>{{ $t('projects.relays.captionAppMain') }}</p>
          </div>
          <div class="gallery-item gallery-item-previous">
            <div class="gallery-item-blur-wrap">
              <img 
                :src="relaysApp02" 
                :alt="$t('projects.relays.galleryApp2')"
              />
              <span class="gallery-item-previous-label">{{ $t('projects.relays.previousVersion') }}</span>
            </div>
            <p>{{ $t('projects.relays.captionAppInterface') }}</p>
          </div>
          <div class="gallery-item">
            <img 
              :src="relaysBackend" 
              :alt="$t('projects.relays.galleryBackend')"
              @click="openLightbox(relaysBackend)"
            />
            <p>{{ $t('projects.relays.captionBackend') }}</p>
          </div>
          <div class="gallery-item">
            <img 
              :src="relaysMain" 
              :alt="$t('projects.relays.galleryRelaySetup')"
              @click="openLightbox(relaysMain)"
            />
            <p>{{ $t('projects.relays.captionRelaySetup') }}</p>
          </div>
          <div class="gallery-item">
            <img 
              :src="serverRelays" 
              :alt="$t('projects.relays.galleryServer')"
              @click="openLightbox(serverRelays)"
            />
            <p>{{ $t('projects.relays.captionServer') }}</p>
          </div>
          <div class="gallery-item">
            <img 
              :src="serverRelaysBatteries" 
              :alt="$t('projects.relays.galleryServerBatteries')"
              @click="openLightbox(serverRelaysBatteries)"
            />
            <p>{{ $t('projects.relays.captionServerBatteries') }}</p>
          </div>
          <div class="gallery-item">
            <img 
              :src="tactileScreen" 
              :alt="$t('projects.relays.galleryTactile')"
              @click="openLightbox(tactileScreen)"
            />
            <p>{{ $t('projects.relays.captionTactile') }}</p>
          </div>
          <div class="gallery-item">
            <img 
              :src="solarHeater" 
              :alt="$t('projects.relays.gallerySolar')"
              @click="openLightbox(solarHeater)"
            />
            <p>{{ $t('projects.relays.captionSolar') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Future Expansion Section -->
    <section class="future">
      <div class="section-content">
        <h2>{{ $t('projects.relays.future') }}</h2>
        <div class="future-grid">
          <div class="future-card">
            <i class="fas fa-cog" />
            <h3>{{ $t('projects.relays.userCustomization') }}</h3>
            <p>{{ $t('projects.relays.userCustomizationDesc') }}</p>
          </div>
          <div class="future-card">
            <i class="fas fa-thermometer-half" />
            <h3>{{ $t('projects.relays.tempMonitoring') }}</h3>
            <p>{{ $t('projects.relays.tempMonitoringDesc') }}</p>
          </div>
          <div class="future-card">
            <i class="fas fa-robot" />
            <h3>{{ $t('projects.relays.automationControl') }}</h3>
            <p>{{ $t('projects.relays.automationControlDesc') }}</p>
          </div>
          <div class="future-card">
            <i class="fas fa-ethernet" />
            <h3>{{ $t('projects.relays.ethernetConnectivity') }}</h3>
            <p>{{ $t('projects.relays.ethernetConnectivityDesc') }}</p>
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
      <img :src="lightboxImage" :alt="$t('projects.relays.lightboxAlt')" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useLocalePath } from '@/composables/useLocalePath';
import relayReg from '@/assets/relays/android-interface/relay-reg.jpg';
import relayEdit from '@/assets/relays/android-interface/relay-edit.jpg';
import relayEmod from '@/assets/relays/android-interface/relay-emod.jpg';
import relayDmod from '@/assets/relays/android-interface/relay-dmod.jpg';
import relayPage from '@/assets/relays/android-interface/relay-page.jpg';
import relaysInterface from '@/assets/relays/android-interface/relays-interface.jpg';
import relaysApp01 from '@/assets/relays/relays app 01.jpg';
import relaysApp02 from '@/assets/relays/relays app 02.jpg';
import relaysBackend from '@/assets/relays/relays backend controllers.png';
import relaysMain from '@/assets/relays/relays.jpg';
import serverRelays from '@/assets/relays/server - relays.jpg';
import serverRelaysBatteries from '@/assets/relays/server - relays - batteries.jpg';
import tactileScreen from '@/assets/relays/tactile screen.jpg';
import solarHeater from '@/assets/relays/solar heater.jpg';

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

.relays-page {
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

/* Android Interface Section */
.android-interface {
  border-top: 1px solid $slate-800;
}

.android-interface-intro {
  font-size: 1.1rem;
  line-height: 1.8;
  color: $slate-300;
  margin-bottom: 30px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

/* Gallery Section */
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

.gallery-item-previous .gallery-item-blur-wrap {
  position: relative;
  display: block;
  height: 250px;
}

.gallery-item-previous .gallery-item-blur-wrap img {
  filter: blur(6px);
  cursor: default;
  pointer-events: none;
}

.gallery-item-previous .gallery-item-blur-wrap img:hover {
  opacity: 1;
}

.gallery-item-previous-label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0.5rem 1rem;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
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
