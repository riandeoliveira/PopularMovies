/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        card: "32.8387px 24.5482px 79px rgba(0, 0, 0, 0.15), 23.8851px 17.855px 53.2479px rgba(0, 0, 0, 0.121406), 16.6246px 12.4276px 34.4391px rgba(0, 0, 0, 0.10125), 10.9035px 8.15079px 21.3701px rgba(0, 0, 0, 0.0867188), 6.56775px 4.90965px 12.8375px rgba(0, 0, 0, 0.075), 3.46346px 2.58907px 7.6377px rgba(0, 0, 0, 0.0632813), 1.4367px 1.07399px 4.56719px rgba(0, 0, 0, 0.04875), 0.333519px 0.249318px 2.42246px rgba(0, 0, 0, 0.0285938);",
        image: "20px 20px 30px 0px #0000004D",
      },
      colors: {
        "complementary-red": "#BA0707",
        "complementary-yellow": "#D7A82E",
        "neutral-dark": "#454558",
        "neutral-light": "#ACACAC",
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
