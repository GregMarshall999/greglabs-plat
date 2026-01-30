import { useI18n } from 'vue-i18n'

/**
 * Returns a function that converts a route location to the locale-prefixed equivalent.
 * - English (default): no prefix, route names as-is (e.g. home, contact).
 * - French: /fr prefix, route names prefixed with fr- (e.g. fr-home, fr-contact).
 */
export function useLocalePath() {
  const { locale } = useI18n()

  function localePath(to) {
    if (typeof to === 'string') {
      const path = to === '/' ? '' : to
      return locale.value === 'fr' ? `/fr${path}` : to
    }
    if (to && typeof to === 'object' && to.name) {
      const name = locale.value === 'fr' ? `fr-${to.name}` : to.name
      return { ...to, name }
    }
    return to
  }

  return { localePath }
}
