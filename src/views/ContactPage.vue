<template>
  <div class="contact-page">
    <div class="contact-inner">
      <!-- Left: Contact Information -->
      <div class="contact-info-section">
        <div class="contact-header">
          <div class="contact-badge">
            <span class="badge-dot"></span>
            {{ $t('common.availableForOpportunities') }}
          </div>
          <h2 class="contact-title">
            {{ $t('contact.title') }}
            <span class="text-primary">{{ $t('contact.subtitle') }}</span>
          </h2>
          <p class="contact-description">{{ $t('contact.availabilityText') }}</p>
        </div>

        <div class="contact-cards">
          <div
            v-for="item in contactItems"
            :key="item.label"
            class="contact-card"
          >
            <div class="contact-card-icon">
              <span class="material-symbols-outlined">{{ item.icon }}</span>
            </div>
            <h3 class="contact-card-label">{{ item.label }}</h3>
            <p class="contact-card-value">{{ item.value }}</p>
          </div>
        </div>

        <div class="contact-map-placeholder">
          <div class="map-overlay"></div>
          <div class="map-pin">
            <span class="material-symbols-outlined">location_on</span>
          </div>
        </div>
      </div>

      <!-- Right: Contact Form -->
      <div class="contact-form-section">
        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-row">
            <div class="form-group">
              <label for="name">{{ $t('contact.name') }}</label>
              <input
                id="name"
                v-model="formData.name"
                type="text"
                required
                :placeholder="$t('contact.namePlaceholder')"
              />
            </div>
            <div class="form-group">
              <label for="email">{{ $t('contact.email') }}</label>
              <input
                id="email"
                v-model="formData.email"
                type="email"
                required
                :placeholder="$t('contact.emailPlaceholder')"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="subject">{{ $t('contact.subject') }}</label>
            <select id="subject" v-model="formData.subject">
              <option value="project">{{ $t('contact.subjectProject') }}</option>
              <option value="hiring">{{ $t('contact.subjectHiring') }}</option>
              <option value="collab">{{ $t('contact.subjectCollab') }}</option>
              <option value="other">{{ $t('contact.subjectOther') }}</option>
            </select>
          </div>
          <div class="form-group">
            <label for="message">{{ $t('contact.message') }}</label>
            <textarea
              id="message"
              v-model="formData.message"
              required
              rows="5"
              :placeholder="$t('contact.messagePlaceholder')"
            ></textarea>
          </div>
          <button type="submit" class="submit-btn" :disabled="isSubmitting">
            <span>{{ isSubmitting ? $t('contact.sending') : $t('contact.sendMessage') }}</span>
            <span v-if="!isSubmitting" class="material-symbols-outlined">send</span>
          </button>
          <p v-if="submitStatus" :class="['status-message', submitStatus.type]">
            {{ submitStatus.message }}
          </p>
          <p class="form-footer">{{ $t('contact.formFooter') }}</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const contactItems = computed(() => [
  { label: t('contact.email'), value: 'gregory.marshall999@gmail.com', icon: 'mail' },
  { label: 'LinkedIn', value: 'linkedin.com/in/gregorymarshall999', icon: 'share' },
  { label: 'GitHub', value: 'github.com/GregMarshall999', icon: 'code' },
  { label: t('contact.location'), value: 'France', icon: 'location_on' },
]);

const formData = reactive({
  name: '',
  email: '',
  subject: 'project',
  message: '',
});

const isSubmitting = ref(false);
const submitStatus = ref(null);

async function handleSubmit() {
  isSubmitting.value = true;
  submitStatus.value = null;

  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    submitStatus.value = { type: 'success', message: t('contact.successMessage') };
    formData.name = '';
    formData.email = '';
    formData.subject = 'project';
    formData.message = '';
  } catch (error) {
    submitStatus.value = { type: 'error', message: t('contact.errorMessage') };
  } finally {
    isSubmitting.value = false;
  }
}
</script>

<style scoped lang="scss">
@use '@/scss/variables' as *;

.contact-page {
  width: 100%;
  max-width: 72rem;
  padding: 3rem 1.5rem;
  @media (min-width: 1024px) {
    padding: 6rem 1.5rem;
  }
}

.contact-inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
}

.contact-info-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.75rem;
  border-radius: $radius-full;
  background: rgba($primary, 0.1);
  border: 1px solid rgba($primary, 0.2);
  color: $primary;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  width: fit-content;
}

.badge-dot {
  position: relative;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: $primary;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: $primary;
    opacity: 0.75;
    animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
  }
}

@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

.contact-title {
  font-size: 2.25rem;
  font-weight: 900;
  letter-spacing: -0.025em;
  color: white;
  @media (min-width: 1024px) {
    font-size: 3rem;
  }
}

.text-primary {
  color: $primary;
}

.contact-description {
  font-size: 1.125rem;
  color: $slate-400;
  max-width: 28rem;
  line-height: 1.6;
}

.contact-cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.contact-card {
  padding: 1.25rem;
  border-radius: $radius-xl;
  border: 1px solid $slate-800;
  background: rgba($slate-900, 0.5);
  transition: border-color 0.2s;
  &:hover {
    border-color: rgba($primary, 0.5);
  }
}

.contact-card-icon {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: $radius-lg;
  background: rgba($primary, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: $primary;
  margin-bottom: 1rem;
  transition: transform 0.2s;
  .contact-card:hover & {
    transform: scale(1.1);
  }
}

.contact-card-label {
  font-size: 1rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.25rem;
}

.contact-card-value {
  font-size: 0.875rem;
  color: $slate-500;
}

.contact-map-placeholder {
  margin-top: 2rem;
  height: 12rem;
  border-radius: $radius-xl;
  border: 1px solid $slate-800;
  overflow: hidden;
  position: relative;
  background: linear-gradient(135deg, $slate-800 0%, $slate-900 100%);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.map-overlay {
  position: absolute;
  inset: 0;
  background: rgba($primary, 0.1);
  pointer-events: none;
}

.map-pin {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 2rem;
  height: 2rem;
  background: $primary;
  border-radius: 50%;
  border: 4px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  .material-symbols-outlined {
    color: white;
    font-size: 1rem;
  }
}

.contact-form-section {
  background: $slate-900;
  padding: 2rem;
  border-radius: $radius-2xl;
  border: 1px solid $slate-800;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  @media (min-width: 1024px) {
    padding: 2.5rem;
  }
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-size: 0.875rem;
  font-weight: 600;
  color: $slate-300;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 0.75rem 1rem;
  background: rgba($slate-800, 0.5);
  border: 1px solid $slate-700;
  border-radius: $radius-lg;
  color: white;
  font-size: 1rem;
  transition: border-color 0.2s, box-shadow 0.2s;
  &::placeholder {
    color: $slate-500;
  }
  &:focus {
    outline: none;
    border-color: $primary;
    box-shadow: 0 0 0 2px rgba($primary, 0.25);
  }
}

.form-group select {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1.25rem;
  padding-right: 2.5rem;
}

.form-group textarea {
  resize: none;
}

.submit-btn {
  margin-top: 0.5rem;
  width: 100%;
  padding: 1rem 1.5rem;
  background: $primary;
  color: white;
  font-size: 1rem;
  font-weight: 700;
  border: none;
  border-radius: $radius-lg;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: background-color 0.2s, box-shadow 0.2s;
  &:hover:not(:disabled) {
    background: rgba($primary, 0.9);
    box-shadow: 0 10px 25px rgba($primary, 0.25);
  }
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  .material-symbols-outlined {
    font-size: 1.125rem;
  }
}

.status-message {
  padding: 1rem;
  border-radius: $radius-lg;
  text-align: center;
  font-size: 0.875rem;
  &.success {
    background: rgba($primary, 0.1);
    color: $primary;
  }
  &.error {
    background: rgba(239, 68, 68, 0.1);
    color: #ef4444;
  }
}

.form-footer {
  text-align: center;
  font-size: 0.75rem;
  color: $slate-500;
}
</style>
