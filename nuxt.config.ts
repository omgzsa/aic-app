// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    apiUrl: process.env.API_URL || '',
  },

  devServer: { port: 3006 },
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
});