const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  // Active dark mode on class basis
  darkMode: "class",
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  theme: {
    fontFamily: {
      sans: ["Source Sans Pro", "Kantumruy", ...defaultTheme.fontFamily.sans],
    },
    zIndex: {
      0: 0,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      25: 25,
      75: 75,
      90: 90,
      100: 100,
      auto: "auto",
    },
    extend: {
      animation: {
        scrollTextLarge: 'scrollTextLarge linear infinite',
        scrollTextMedium: 'scrollTextMedium linear infinite',
        scrollTextMobile: 'scrollTextMobile linear infinite'
      },
      backgroundColor: (theme) => ({
        facebook: "#1778F2",
        tfd: "#ce3637",
      }),
      colors: (theme) => ({
        facebook: "#1778F2",
        tfd: "#ce3637",
      }),
      fontFamily: {
        captainbold: [
          '"Medium 500"',
          '"Noto Serif Khojki"',
          ...defaultTheme.fontFamily.sans,
        ],
        captainlight: [
          '"Regular 400"',
          '"Noto Serif Khojki"',
          ...defaultTheme.fontFamily.sans,
        ],
        handwritten: [
          '"Caveat"',
          ...defaultTheme.fontFamily.sans,
        ],
        playfair: ['"Playfair Display"', ...defaultTheme.fontFamily.sans],
        cormorant: ['"Cormorant Garamond"', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        scrollTextLarge: {
          from: { transform: 'translateX(-28%)'},
          to: { transform: 'translateX(100%)' },
        },
        scrollTextMedium: {
          from: { transform: 'translateX(-50%)'},
          to: { transform: 'translateX(100%)' },
        },
        scrollTextMobile: {
          from: { transform: 'translateX(-100%)'},
          to: { transform: 'translateX(100%)' },
        },
      },
    }
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#1f2937",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/forms"), require("daisyui"), require('tailwind-scrollbar-hide')],
  future: {
    purgeLayersByDefault: true,
  },
};
