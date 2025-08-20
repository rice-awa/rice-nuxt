// nuxt.config.js
export default defineNuxtConfig({
	app: {
		head: {
			title: "全栈信息处理协会 - 全栈信息处理协会官网",
			meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { name: "description", content: "全栈信息处理协会官网" }, { name: "keywords", content: "全栈信息处理, 协会, 全栈, 信息处理, 编程, 科技" }],
			link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
			script: [
				{
					type: "application/ld+json",
					innerHTML: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Organization",
						name: "全栈信息处理协会",
						url: "https://demo.rice-awa.top",
						logo: "https://demo.rice-awa.top/images/logo.webp",
						sameAs: ["https://www.facebook.com/your-profile", "https://www.twitter.com/your-profile", "https://www.github.com/your-profile"],
						contactPoint: {
							"@type": "ContactPoint",
							contactType: "Customer Service",
							email: "info@rice-awa.top",
						},
					}),
				},
			],
		},
	},

	sitemap: {
		hostname: "https://demo.rice-awa.top",
		gzip: true,
	},

	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },
	css: ["@/assets/css/tailwind.css"],
	modules: ["@nuxtjs/tailwindcss", "@nuxt/icon", "@nuxtjs/robots", "@nuxtjs/sitemap", "@nuxt/image", "v-gsap-nuxt"],
});
