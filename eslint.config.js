import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';

export default [
  ...pluginVue.configs['flat/strongly-recommended'],
  {
    languageOptions: {
        sourceType: 'module',
        globals: {
            ...globals.browser
        }
    }
  }
]