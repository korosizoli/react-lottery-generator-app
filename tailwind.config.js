/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
	theme: {
		fontFamily: {
			sans: ["Madimi One", "sans-serif"],
		},
    container: {
      center: true,
      padding: '1rem',
    },
		extend: {},
	},
	plugins: [],
};
