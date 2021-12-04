module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
	mode: 'jit', // Just in time compiler
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				main_violet: '#7b2cbf',
				dark_violet: '#5a189a',
				gray_blue: '#7DA0BA',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
