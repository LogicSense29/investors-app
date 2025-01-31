/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./component/**/*.{js,jsx,ts,tsx}",
    "./constants/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // "text-primary": "#0164C6",
        primary: "#890709",
        // "text-gray": "#5F5F5F",
      },
      fontFamily: {
        "inter-black": ["Inter-Black"],
        inter: ["Inter-Regular"],
      },
    },
  },
  plugins: [],
};
