/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E74C3C",
        dark: "#111111",
        light: "#FFFFFF",
        gray: {
          50: "#F9F9F9",
          100: "#F5F5F5",
          200: "#EEEEEE",
          300: "#E0E0E0",
          800: "#222222",
          900: "#1A1A1A",
        }
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        manga: ["Bangers", "cursive"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        }
      },
      backgroundImage: {
        "noise": "url('https://grainy-gradients.vercel.app/noise.svg')",
      }
    },
  },
  darkMode: 'class',
  plugins: [],
};
