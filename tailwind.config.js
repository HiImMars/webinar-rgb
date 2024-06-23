/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        redAccent: "#FF3459",
        inputBg: "#272D3D",
      },
      screens: {
        large: "1440px",
        // => @media (min-width: 1280px)
      },
      width: {
        22: "88px",
      },
      boxShadow: {
        small: "0 20px 60px rgba(51, 47, 101, 0.9)",
        big: "0 20px 60px rgba(51, 47, 101, 0.9)",
      },
    },
  },
  plugins: [],
};
