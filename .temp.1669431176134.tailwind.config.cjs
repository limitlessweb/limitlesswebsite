/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'bg-light': '#9533D6',
			'bg-dark': '#7F1AC2',
			'main-pink': '#DE46EB',
			'main-turq': '#47EBDD',
			'main-black': '#3A3E42',
			'main-white': '#F5F5F3',
			'alt-cyan': '#46C0EB',
			'alt-pink': '#B135BB',
			'grad-start': '#9533D6',
			'grad-stop': '#7F1AC2',
		},
		fontFamily: {
			'heading': ['Raleway', 'sans-serif'],
			'main': ['Open Sans', 'sans-serif'],
		},
		backgroundImage: {
			'hero-bg': "url('../images/hero-bg.svg')",
		}
		extend: {},
	},
	plugins: [],
}
