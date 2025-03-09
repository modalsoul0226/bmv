// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  $meta: {
    name: "bmv",
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  devServer: {
    port: 3010,
  },
  modules: ["nuxt-neo4j", "@nuxt/ui"],
  neo4j: {},
});
