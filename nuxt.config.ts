// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/styles/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@vue-macros/nuxt',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@vueuse/nuxt',
    '@vant/nuxt',
  ],
  colorMode: {
    classSuffix: '',
  },
  imports: {
    dirs: ['stores'],
  },
})
