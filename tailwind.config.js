/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#051D40",
        white: "#FAFAFA",
        dark: "#030F20",
        "light-blue": "#B1D4E0",
        gray: "#D9D9D9",
      },
      fontFamily: {
        urbanist: ["Urbanist-Regular", "sans-serif"],
        "urbanist-medium": ["Urbanist-Medium", "sans-serif"],
        "urbanist-semibold": ["Urbanist-SemiBold", "sans-serif"],
        "urbanist-bold": ["Urbanist-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
