module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      "app-blue": "#1311934",
      "app-red": "#ED6F6F",
      "app-orange": "#F67626",
      "app-purple": "#E301FA",
      "cell-gray": "#182246",
      "icon-bg": "#1C254C",
      "font-black": "#1D2649",
      "font-light-black": "#2B3661",
      "font-white": "#EEF1F6",
      "font-dark-blue": "#8899B3",
      "font-red": "#ED6F6F",
      "font-blue": "#0078FF",
      "font-gray": "#8899B3",
      "table-light-blue": "#35406C",
      "table-dark-blue": '":"#1C2654',
    },
    extend: {
      backgroundImage: (theme) => ({
        cardBG: "url('/img/bg.png')",
      }),
    },
    fontSize: {
      '3xs':['0.45rem', { lineHeight: '0.55rem' }],
      '2xs':['0.65rem', { lineHeight: '0.75rem' }],
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
