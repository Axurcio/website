/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#edf9ff",
          100: "#d6f0ff",
          200: "#b5e4ff",
          300: "#83d3ff",
          400: "#49b6ff",
          500: "#178ff0",
          600: "#0b70cd",
          700: "#0f5aa6",
          800: "#124b86",
          900: "#123f70",
          950: "#09243f",
        },
        accent: {
          50: "#fbffe7",
          100: "#f2ffc2",
          200: "#e5ff88",
          300: "#d2ff4d",
          400: "#b9ff66",
          500: "#86db1f",
          600: "#65b214",
          700: "#4d8716",
          800: "#406b19",
          900: "#385b1b",
          950: "#1a3109",
        },
        surface: {
          50: "#f7f9f6",
          100: "#eef4f1",
          200: "#dbe7e2",
          300: "#bdd1ca",
        },
        ink: "#061412",
        ember: "#ff6b4a",
      },
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Sora", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 50px -34px rgba(3, 17, 25, 0.45)",
        glow: "0 0 0 1px rgba(185, 255, 102, 0.2), 0 32px 90px -50px rgba(23, 143, 240, 0.65)",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.9" },
        },
      },
      animation: {
        rise: "rise 0.7s ease-out both",
        float: "float 7s ease-in-out infinite",
        "pulse-line": "pulseLine 2.8s ease-in-out infinite",
      },
    },
  },
};
