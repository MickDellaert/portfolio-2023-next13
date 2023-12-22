
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
        sans: ["var(--font-redhat)", "sans-serif"],
      },
      
      fontSize: {
        clamp: "clamp(1.2rem, 5.5vw, 3.2rem)",
        "clamp-mobile": "clamp(1.2rem, 7vw, 2.4rem)",
        "clamp-very-short": "clamp(1.2rem, 4vw, 2.4rem)",
      },

      fontWeight: {
        semibold: "650",
        bold: "680",
      },

      screens: {
        shortandwide: { raw: "((max-height: 721px) and (min-width: 639px))" },
        "very-short": { raw: "(max-height: 480px)" },
      },
      containers: {
        "2xs": "16rem",
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
