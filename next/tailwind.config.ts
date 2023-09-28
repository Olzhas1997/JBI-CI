/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  variants: {
    extend: {
      borderColor: ['responsive', 'active'],
      borderOpacity: ['responsive', 'active'],
      borderStyle: ['responsive', 'active'],
    },
  },
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      black: {
        DEFAULT: '#2D2D2D',
      },
      white: {
        DEFAULT: '#FFFFFF',
        100: '#F3F8FD',
        200: '#E6ECF5',
      },
      blue: {
        DEFAULT: '#5D7192',
        100: '#405F85',
        200: '#196FA8',
        300: '#114C72',
      },
      brown: {
        DEFAULT: '#A09995',
        100: '#A78C7D',
        200: '#9B523B',
      },
      100: '#A78C7D',
      200: '#9B523B',
    },
    grey: {
      DEFAULT: '#2D2D2D80',
    },
    container: {
      center: true,
      padding: {
        xs: '1rem',
        sm: '1rem',
        md: '1rem',
      },
      screens: {
        xxs: '300px',
        xs: '345px',
        sm: '430px',
        md: '544px',
        lg: '736px',
        xl: '960px',
        '2xl': '1338px',
        '3xl': '1598px',
        '4xl': '1763px',
      },
    },
    screens: {
      xxs: '0',
      xs: '370px',
      sm: '450px',
      md: '576px',
      lg: '768px',
      xl: '992px',
      '2xl': '1370px',
      '3xl': '1630px',
      '4xl': '1795px',
    },
    fontFamily: {
      codec: ['CodecCold', 'sans-serif'],
      tt: ['TTAutonomous', 'sans-serif'],
      proxima: ['ProximaNova', 'sans-serif'],
      getvo: ['GetVoIP', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
    fontSize: {
      xxs: ['0.75rem', '15.6px'] /* fontSize:12px, lineHeight: 15.6px */,
      xs: ['0.875rem', '18.2px'] /* fontSize:14px, lineHeight: 18.2px */,
      'sm-caps': ['0.938rem', '19.5px'] /* fontSize:15px, lineHeight: 19.5px */,
      sm: ['1rem', '20.8px'] /* fontSize:16px, lineHeight: 20.8px */,
      base: ['1.125rem', '23.4px'] /* fontSize:18px, lineHeight: 23.4px */,
      lg: ['1.25rem', '26px'] /* fontSize:20px, lineHeight: 26px */,
      xl: ['1.5rem', '31.2px'] /* fontSize:24px, lineHeight: 31.2px */,
      '2xl': ['1.563rem', '32.5px'] /* fontSize:25px, lineHeight: 32.5px */,
      '3xl': ['2rem', '41.6px'] /* fontSize:32px, lineHeight: 41.6px */,
      '4xl': ['2.188rem', '45.5px'] /* fontSize:35px, lineHeight: 45.5px */,
      '5xl': ['2.5rem', '52px'] /* fontSize:40px, lineHeight: 52px */,
      '6xl': ['2.813rem', '58.5px'] /* fontSize:45px, lineHeight: 58.5px */,
      '7xl': ['3.125rem', '65px'] /* fontSize:50px, lineHeight: 65px */,
      '8xl': ['3.438rem', '71.5px'] /* fontSize:55px, lineHeight: 71.5px */,
      '9xl': ['4.375rem', '91px'] /* fontSize:70px, lineHeight: 91px */,
      '10xl': ['5rem', '104px'] /* fontSize:80px, lineHeight: 104px */,
      '11xl': ['8rem', '166.4px'] /* fontSize:128px, lineHeight: 166.4px */,
      '12xl': ['9.375rem', '195px'] /* fontSize:150px, lineHeight: 195px */,
    },
    letterSpacing: {
      h1: '0.469rem',
      h3: '0.05rem',
      h4: '0.044rem',
      h13: '0.023rem',
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
  },

  plugins: [],
};
