/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./layout/*.liquid',
		'./sections/*.liquid',
		'./snippets/*.liquid',
		'./templates/*.liquid',
		'./assets/*.js',
	],
	theme: {
		extend: {
			fontFamily: {
				// CSS değişkenlerimize bağlıyoruz
				heading: ['var(--font-heading-family)'],
				body: ['var(--font-body-family)'],
			},
			colors: {
				'lyra-primary': 'var(--color-lyra-primary)',
				'lyra-bg': 'var(--color-lyra-bg)',
				'lyra-text': 'var(--color-lyra-text)',
			},
		},
	},
};
