/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./main.js", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {}, // Place custom extensions here if needed
  },
  daisyui: {
    themes: [
      {
        colortheme: {
          "base-100": "#cfcfe8",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
