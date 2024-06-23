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
    },
  },
  plugins: [],
};
