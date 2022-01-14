const colors = require("tailwindcss/colors");

module.exports = {
	mode: "jit",
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
          1100 :'#040F23',
          1000 :'#07152F',
          900 :'#091B3A',
          800 :'#0C2045',
          700 :'#0F264F',
          600 :'#2A3B65',
          500 :'#45507B',
          400 :'#606790',
          300 :'#7C7FA5',
          200 :'#9898B9',
          100 :'#B6B4CD',
				},
			},
		},
	},
	plugins: [],
};
