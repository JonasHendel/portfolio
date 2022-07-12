module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				darkBrown: '#621B00',
				transparentGray: 'rgb(31, 31, 31, 0.7)',
			},
			minWidth: {
				96: '24rem',
			},
			minHeight: {
				'1000px': '800px',
			},
			padding: {
				'2px': '2px',
			},
			fontFamily: {
				'sans-serif': ['Inter'],
			},
		},
	},
	plugins: [],
};
