/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef7ff",
          100: "#d8ebff",
          200: "#b9daff",
          300: "#89c3ff",
          400: "#4aa0ff",
          500: "#1172ff",
          600: "#0c5bda",
          700: "#0c47ab",
          800: "#0f3d8d",
          900: "#102f68",
          950: "#081a33",
        },
        accent: {
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
          950: "#082f49",
        },
        surface: {
          50: "#f8fbff",
          100: "#edf4fb",
          200: "#dce8f5",
          300: "#c1d7ea",
        },
      },
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Sora", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 80px -32px rgba(15, 23, 42, 0.28)",
        glow: "0 0 0 1px rgba(255, 255, 255, 0.18), 0 30px 80px -30px rgba(17, 114, 255, 0.45)",
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
