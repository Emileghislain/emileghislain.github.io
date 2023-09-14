/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }, */
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        blink_caret: "blink 1s step-end infinite",
        typing: "typing 4s steps(44) 1s 1 normal both",
        appear: "appear 10s ease-in",
        color: "color 2s ease-in-out infinite",
      },
      keyframes: {
        color: {
          "0%": { top: "0"},
          "100%": { top: "100%" }
        },
        appear: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        wiggle: {
          "0%, 100%": { transform: "translateX(15%)" },
          "50%": { transform: "translateX(-15%)" },
        },
        typing: {
          "0%": { "width": "0"},
          "100%": { "with": "100%" },
        },
        blink: {
          "0%, 100%": {
            "background-color": "transparent",
          },
          "50%": {
            "background-color": "#1f1f1f",
          }
        },
      },
    },
    screens: {
      xs: { max: "639px" },

      sm: { min: "640px", max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
