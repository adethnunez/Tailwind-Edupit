/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'primary': '#0EB582',
        'dark': '#2A374C',
        'light': '#FFFFFF',
        'dgrey': '#444',
        'lblue': '#18406b',
        'lgreen': '#C6F9E9',
        'grey': '#777777',
        'dblue': '#4b5981',
      },

      screens: {
        'sm': '500px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      backgroundImage:{
        'bg__banner': 'url("./img/bg_img.jpg")',
        'banner-bg': 'url("./img/bg_img.jpg")',
        'course-bg': 'url("./img/banner1.png")'
      },
      fontFamily: {
        'Raleway' :['Raleway', 'sans-serif']
      },
      keyframes: {
        sliding1:{
          from: {
            left:'0',
          },
          to: {
            left:'100%',
          },
        },
        sliding2:{
          from: {
            right:'0',
          },
          to: {
            right:'100%',
          },
        }
      },
      animation:{
        sliding1: 'sliding1 3s linear infinite',
        sliding2: 'sliding2 3s linear infinite',
      },
    },
  },
  plugins: [],
}

