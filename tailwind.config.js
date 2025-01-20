/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#282624",
      },
      keyframes: {
        "infinite-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-50% - 5px))" },
        },
      },
      animation: {
        "infinite-scroll": "infinite-scroll 10s linear infinite",
      },
    },
  },
  plugins: [],
};
