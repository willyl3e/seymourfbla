/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./@/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      dropShadow:{
        "3xl":"0 35px 35px rgba(0, 0, 0, 0.25)"
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
