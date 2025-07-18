/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Đảm bảo các file được scan
  ],
  theme: {
    extend: {
      fontFamily: {
        imbue: ['"Imbue"', 'serif'],
      },
    },
  },
  plugins: [],
}