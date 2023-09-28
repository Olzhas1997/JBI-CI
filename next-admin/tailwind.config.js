/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {},
      colors: {
        orange: {
          DEFAULT: '#196FA8',
        },
        black: {
          DEFAULT: '#191919',
          100: '#000000'
        },
        white: {
          DEFAULT: '#FFFFFF'
        },
        red: {
          DEFAULT: '#C20625'
        },
        green: {
          DEFAULT: '#00FF00'
        },
        blue: {
          DEFAULT: '#0082CA'
        },
        gray: {
          DEFAULT: '#F2F2F2',
          900: '#09182e'
        }
      },
      container: {
        center: true,
        padding: {
          xs: "1rem",
          sm: "1rem",
          md: "1rem",
        },
        screens: {
          xxs: "300px",
          xs: "375px",
          sm: "546px",
          md: "738px",
          lg: "962px",
          xl: "1340px",
          xxl: "1600px",
          xx: "1765px",
        },
      },
      screens: {
        xxs: "0",
        xs: "320px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1370px",
        xxl: "1630px",
        xx: "1795px",
        lpTall: { raw: "(max-height: 800px)" },
      },
    },
  },
  plugins: [],
}
