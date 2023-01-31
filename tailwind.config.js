/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Using modern `rgb`
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",

        // Using modern `hsl`
        // primary: "hsl(var(--color-primary) / <alpha-value>)",
        // secondary: "hsl(var(--color-secondary) / <alpha-value>)",

        // // Using legacy `rgba`
        // primary: "rgba(var(--color-primary), <alpha-value>)",
        // secondary: "rgba(var(--color-secondary), <alpha-value>)",
      },

      fontFamily: {
        sans: ["var(--font-main)"],
      },
    },
  },
  plugins: [],
};
