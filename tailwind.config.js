module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif']
      },
      width: {
        '22': '88px',
      },
      zIndex: {
         '-10': '-10',
      }
    },
    customColorPalette: {
      colors: {
          orange: "#FF7E44",
          orangeHover: "#E5713D",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@markusantonwolf/tailwind-css-plugin-custom-color-palette"),
  ],
}
