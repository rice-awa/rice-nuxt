// nuxt.config.js
export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },
	css: ["@/assets/css/tailwind.css"],
	modules: ["@nuxtjs/tailwindcss", "@nuxt/icon"],
});
