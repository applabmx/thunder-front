// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/styles.css',
    '~/assets/css/font.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", 'nuxt-gtag'],
  // gtag: {
  //   id : 'G-D4BS9KM939'
  // },
  runtimeConfig: {
    public: {
      gtagId: 'G-D4BS9KM939',
    }
  }
})