import { watch } from 'vue';
import { createI18n } from 'vue-i18n';
import en from './locales/en.js';
import fr from './locales/fr.js';

const STORAGE_KEY = 'greglabs-locale';
const SUPPORTED = new Set(['en', 'fr']);

function getInitialLocale() {
  if (typeof window !== 'undefined' && window.location?.pathname?.startsWith('/fr')) {
    return 'fr';
  }
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && SUPPORTED.has(stored)) return stored;
  const browser = navigator.language?.slice(0, 2);
  if (browser && SUPPORTED.has(browser)) return browser;
  return 'en';
}

const i18n = createI18n({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: 'en',
  messages: { en, fr },
});

export function syncDocumentLang(locale) {
  if (document.documentElement) {
    document.documentElement.lang = locale;
  }
}

syncDocumentLang(i18n.global.locale.value);

watch(i18n.global.locale, (newLocale) => {
  syncDocumentLang(newLocale);
});

export { STORAGE_KEY };
export default i18n;
