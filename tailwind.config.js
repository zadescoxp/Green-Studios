/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#1a1a1a",
          text: "#ffffff",
          bg: "#121212",
        },
        foreground: "rgb(var(--foreground-rgb))",
        background: "rgb(var(--background-rgb))",
      },
    },
  },
  plugins: [],
}; 