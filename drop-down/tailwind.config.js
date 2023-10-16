/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      metal: "#565584",
      gray: "hsl(0, 0%, 41%)",
      off: "hsl(0, 0%, 98%)",
      customColor: "hsl(0, 0%, 8%)",
      black: "hsl(0, 0%, 8%)",
    },
    extend: {},
  },
  plugins: [],
};
