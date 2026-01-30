<template>
  <div class="relays-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>{{ $t('projects.relays.title') }}</h1>
        <p class="subtitle">
          {{ $t('projects.relays.subtitle') }}
        </p>
        <p class="description">
          {{ $t('projects.relays.description') }}
        </p>
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
.relays-page {
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

/* Android Interface Section */
.android-interface {
  background-color: #1a2438;
}

.android-interface-intro {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #ffffff;
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
