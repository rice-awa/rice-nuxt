/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: [
		"./components/**/*.{vue,js}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./app.vue",
		"./nuxt.config.{js,ts}",
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
