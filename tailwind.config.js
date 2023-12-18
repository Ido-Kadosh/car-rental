/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				brand: '#FF4D30',
			},
			screens: {
				xsm: '576px',
			},
			backgroundImage: {
				'book-bg': "url('/src/assets/img/book-bg.png')",
			},
		},
	},
	plugins: [],
}
