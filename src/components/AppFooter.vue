<template>
  <footer class="app-footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <div class="footer-logo-icon">
          <span class="material-symbols-outlined">terminal</span>
        </div>
        <span class="footer-brand-text mono-text">{{ $t('nav.home') }}</span>
      </div>

      <LocaleSwitcher />

      <p class="footer-copyright mono-text">
        © {{ new Date().getFullYear() }} {{ $t('footer.copyright') }}
      </p>

      <div class="footer-social">
        <a
          href="https://www.linkedin.com/in/gregorymarshall999"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          class="footer-social-link"
        >
          <span class="material-symbols-outlined">share</span>
        </a>
        <a
          href="https://github.com/GregMarshall999"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          class="footer-social-link"
        >
          <span class="material-symbols-outlined">code</span>
        </a>
        <a
          href="mailto:gregory.marshall999@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
          class="footer-social-link"
        >
          <span class="material-symbols-outlined">mail</span>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import LocaleSwitcher from './LocaleSwitcher.vue';
</script>

<style scoped lang="scss">
@use '@/scss/variables' as *;

.app-footer {
  width: 100%;
  border-top: 1px solid $slate-800;
  padding: 3rem 1.5rem;
  background: transparent;
}

.footer-inner {
  max-width: $max-w-7xl;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  opacity: 0.6;
}

.footer-logo-icon {
  width: 1.5rem;
  height: 1.5rem;
  background: $slate-600;
  border-radius: $radius;
  display: flex;
  align-items: center;
  justify-content: center;
  .material-symbols-outlined {
    color: white;
    font-size: 0.875rem;
  }
}

.footer-brand-text {
  font-size: 0.875rem;
  font-weight: 700;
}

.footer-copyright {
  color: $slate-500;
  font-size: 0.75rem;
}

.footer-social {
  display: flex;
  gap: 1.5rem;
}

.footer-social-link {
  color: $slate-500;
  transition: color 0.2s;
  text-decoration: none;
  &:hover {
    color: $primary;
  }
  .material-symbols-outlined {
    font-size: 1.5rem;
  }
}
</style>
