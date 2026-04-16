/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#8DC645",
        secondary: "#2CA8E0",
        dark: "#001439",
        gray: {
          DEFAULT: "#9EA1B0",
          light: "#C9CBD3",
        },
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
}
