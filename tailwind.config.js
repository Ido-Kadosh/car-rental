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
				book: "url('/src/assets/img/book-bg.png')",
				choose: "url('/src/assets/img/choose-bg.png')",
				frequently: "url('/src/assets/img/frequently-bg.png')",
				bread: "url('/src/assets/img/bread-bg.png')",
				'get-in-touch': "url('/src/assets/img/get-in-touch-bg.png')",
			},
			fontFamily: {
				poppins: 'Poppins, sans-serif',
			},
			transitionProperty: {
				'max-height': 'max-height',
			},
		},
	},
	plugins: [],
}
