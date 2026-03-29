/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./layout/*.liquid',
		'./sections/*.liquid',
		'./snippets/*.liquid',
		'./templates/*.liquid',
		'./templates/customers/*.liquid',
		'./assets/*.js',
	],
	theme: {
		extend: {
			colors: {
				'lyra-bg': '#FBF9F7',
				'lyra-gold': '#C5A381',
				'lyra-champagne': '#E8D5C4',
				'lyra-text': '#2D2D2D',
			},
			fontFamily: {
				heading: ['"Playfair Display"', 'serif'],
				body: ['Inter', 'sans-serif'],
			},
			spacing: {
				18: '4.5rem',
			},
		},
	},
	plugins: [],
};
