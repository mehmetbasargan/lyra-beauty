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
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
			},
			// BURAYI EKLEYELİM:
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1440px', // Maksimum genişlik sınırımız burası olacak
			},
		},
		extend: {
			screens: {
				'2xl': '1440px',
			},
			fontFamily: {
				// CSS dosyasındaki tam isimlerle eşleşmeli
				heading: ['var(--font-heading)', 'serif'],
				body: ['var(--font-body)', 'sans-serif'],
			},
			colors: {
				lyra: {
					// Burada HEX kodları yerine CSS değişkenlerini bağlayalım ki
					// CSS'den renk değiştirince her yer otomatik değişsin
					primary: 'var(--color-lyra-primary)',
					secondary: 'var(--color-lyra-secondary)',
					text: 'var(--color-lyra-text)',
					bg: 'var(--color-lyra-bg)',
					line: 'var(--color-lyra-line)',
				},
			},
		},
	},
};
