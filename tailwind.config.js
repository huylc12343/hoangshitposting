/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // ✅ chỉ cần viết 1 lần
  theme: {
    extend: {
      fontFamily: {
        imbue: ['"Imbue"', 'serif'], // ✅ add font Imbue tại đây
      },
    },
  },
  plugins: [],
};
