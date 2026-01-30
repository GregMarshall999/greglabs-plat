<template>
  <div class="contact-page">
    <section class="contact-hero">
      <h1>{{ $t('contact.title') }}</h1>
      <p class="subtitle">
        {{ $t('contact.subtitle') }}
      </p>
      <RouterLink
        to="/"
        class="back-button"
      >
        {{ $t('common.back') }}
      </RouterLink>
    </section>

    <div class="contact-container">
      <div class="contact-info">
        <div class="info-card">
          <i class="fas fa-envelope" />
          <h3>{{ $t('contact.email') }}</h3>
          <p>gregory.marshall999@gmail.com</p>
        </div>
        <div class="info-card">
          <i class="fas fa-phone" />
          <h3>{{ $t('contact.phone') }}</h3>
          <p>+33 6 51 14 72 19</p>
        </div>
        <div class="info-card">
          <i class="fas fa-map-marker-alt" />
          <h3>{{ $t('contact.location') }}</h3>
          <p>France</p>
        </div>
        <div class="info-card">
          <i class="fas fa-clock" />
          <h3>{{ $t('contact.availability') }}</h3>
          <p>{{ $t('contact.availabilityText') }}</p>
        </div>
      </div>

      <form
        class="contact-form"
        @submit.prevent="handleSubmit"
      >
        <div class="form-overlay">
          <div class="coming-soon">
            <h2>{{ $t('contact.comingSoonTitle') }}</h2>
            <p>{{ $t('contact.comingSoonText') }}</p>
          </div>
        </div>
        <div class="form-group">
          <label for="name">{{ $t('contact.name') }}</label>
          <input 
            type="text" 
            id="name" 
            v-model="formData.name" 
            required
            :placeholder="$t('contact.namePlaceholder')"
          >
        </div>

        <div class="form-group">
          <label for="email">{{ $t('contact.email') }}</label>
          <input 
            type="email" 
            id="email" 
            v-model="formData.email" 
            required
            :placeholder="$t('contact.emailPlaceholder')"
          >
        </div>

        <div class="form-group">
          <label for="subject">{{ $t('contact.subject') }}</label>
          <input 
            type="text" 
            id="subject" 
            v-model="formData.subject" 
            required
            :placeholder="$t('contact.subjectPlaceholder')"
          >
        </div>

        <div class="form-group">
          <label for="message">{{ $t('contact.message') }}</label>
          <textarea 
            id="message" 
            v-model="formData.message" 
            required
            :placeholder="$t('contact.messagePlaceholder')"
            rows="5"
          />
        </div>

        <button
          type="submit"
          class="submit-btn"
          :disabled="isSubmitting"
        >
          {{ isSubmitting ? $t('contact.sending') : $t('contact.sendMessage') }}
        </button>

        <div
          v-if="submitStatus"
          :class="['status-message', submitStatus.type]"
        >
          {{ submitStatus.message }}
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      isSubmitting: false,
      submitStatus: null
    }
  },
  methods: {
    async handleSubmit() {
      this.isSubmitting = true
      this.submitStatus = null

      try {
        // Here you would typically send the form data to your backend
        // For now, we'll simulate a successful submission
        await new Promise(resolve => setTimeout(resolve, 1000))

        this.submitStatus = {
          type: 'success',
          message: this.$t('contact.successMessage')
        }

        // Reset form
        this.formData = {
          name: '',
          email: '',
          subject: '',
          message: ''
        }
      } catch (error) {
        this.submitStatus = {
          type: 'error',
          message: this.$t('contact.errorMessage')
        }
      } finally {
        this.isSubmitting = false
      }
    }
  }
}
</script>

<style scoped>
.contact-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.contact-hero {
  text-align: center;
  padding: 60px 0;
}

.contact-hero h1 {
  font-size: 3rem;
  color: #71808f;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.2rem;
  color: #42b983;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 40px;
  padding: 40px 0;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-card {
  background: #1a2438;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s ease;
}

.info-card:hover {
  transform: translateY(-5px);
}

.info-card i {
  font-size: 2rem;
  color: #42b983;
  margin-bottom: 15px;
}

.info-card h3 {
  color: #71808f;
  margin-bottom: 10px;
}

.info-card p {
  color: #fff;
}

.contact-form {
  background: #1a2438;
  padding: 40px;
  border-radius: 10px;
  position: relative;
}

.form-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(26, 36, 56, 0.9);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.coming-soon {
  text-align: center;
  color: #fff;
}

.coming-soon h2 {
  font-size: 2rem;
  color: #42b983;
  margin-bottom: 1rem;
}

.coming-soon p {
  color: #71808f;
  font-size: 1.1rem;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  color: #71808f;
  margin-bottom: 8px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #2c3c56;
  border-radius: 5px;
  background: #2c3c56;
  color: #fff;
  font-size: 1rem;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #42b983;
}

.submit-btn {
  background: #42b983;
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}

.submit-btn:hover:not(:disabled) {
  background: #3aa876;
  transform: translateY(-2px);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.status-message {
  margin-top: 20px;
  padding: 15px;
  border-radius: 5px;
  text-align: center;
}

.status-message.success {
  background: rgba(66, 185, 131, 0.1);
  color: #42b983;
}

.status-message.error {
  background: rgba(255, 87, 87, 0.1);
  color: #ff5757;
}

.back-button {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background: transparent;
  border: 2px solid #42b983;
  color: #42b983;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.back-button:hover {
  background: #42b983;
  color: #1a2438;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .contact-container {
    grid-template-columns: 1fr;
  }

  .contact-hero h1 {
    font-size: 2.5rem;
  }

  .contact-form {
    padding: 20px;
  }
}
</style>