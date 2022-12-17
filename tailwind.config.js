/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "complementary-red": "#BA0707",
        "complementary-yellow": "#D7A82E",
        "neutral-dark": "#454558",
        "neutral-light": "#ACACAC",
        "neutral-lightness": "#ffffff",
        "primary-dark": "#17162E",
        "primary-light": "#1D1C3B",
      },
      fontFamily: {
        "primary-family": ["Kumbh Sans", "sans-serif"],
      },
      screens: {
        desktop: "2560px",
        "laptop-l": "1440px",
        "laptop-m": "1280px",
        "laptop-s": "1024px",
        "tablet-l": "900px",
        "tablet-m": "768px",
        "tablet-s": "600px",
        "mobile-l": "425px",
        "mobile-m": "375px",
        "mobile-s": "320px",
      },
    },
  },
  plugins: [],
};
