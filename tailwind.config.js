module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '.125rem',
      DEFAULT: '.25rem',
      'lg': '.5rem',
      'full': '9999px',
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      background: '#fafafa',
      white: {
        DEFAULT: '#fff',
        bright: '#fefdf1',
        vellum: '#fdf9ee',
        natural: '#fffdf6',
        mist: '#eae1cf',
        whitefrost: '#f5f7fe'
      },
      blue: {
        DEFAULT: '#2977b3', // Tabriz Blue
        light: '#ced8e2', // Cool Blue
        medium: '#59abcf',
        xmedium: '#7496b1', // New Blue
        dark: '#315a8b', // Adriatic
        xdark: '#2a2c31' // Imperial Blue
      },
      brown: {
        DEFAULT: '#46341c', // Bagdad Brown
        light: '#8b7152', // Nukuck Brown
        medium: '#302a1c', // Bitter Chocolate
        dark: '#281f1d' // Ebony
      },
      green: {
        DEFAULT: '#0a9601', //
        light: '#aed6ae', // Park Green
        medium: '#246a3f', // Lockwood green
        xmedium: '#008c8c', // Marrs green
        dark: '#274325' // Forest
      },
      grey: {
        DEFAULT: '#babbb5', // Real Grey
        light: '#f1f1f1', // Cool Grey
        medium: '#837e7d', // Smoke
        dark: '#565e50', // Dark Grey
      },
      red: {
        DEFAULT: '#c92a29', // Bright Red
        light: '#ebc8ca', //  Candy Pink
        medium: '#ac2e31', // Vermillion
        dark: '#802024' // Scarlet
      },
      yellow: {
        DEFAULT: '#f5e132', // Factory Yellow
        light: '#f2eb8c', // Sorbet Yellow
        medium: '#e2bc32', // Citrine
        dark: '#d56125' // Mandarin
      },
      // Other colors
      claret: '#441d1f',
      cobalt: '#2f3948',
      emerald: '#327a5f',
      lavendel: '#b9abcf',
      purple: '#54307e',
      turquoise: '#46adb0',
      sapphire: '#313380'
    },
    fontSize: {
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
    opacity: {
      '0': '0',
      '20': '0.2',
      '40': '0.4',
      '60': '0.6',
      '80': '0.8',
      '100': '1',
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
