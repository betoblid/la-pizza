/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "dark-10": "#2E2E2E",
        "btn-orange": "#FFBD48"
        
      },
      backgroundImage: {
        "list": "url(https://a.imagem.app/oNVzBi.png)",
        "banner": "url(https://a.imagem.app/oNV2X8.png)"
      },
      fontFamily: {
        "inter": ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}

