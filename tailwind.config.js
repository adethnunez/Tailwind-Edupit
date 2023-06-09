/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: '#0EB582',
        dark:'#323232',
        light:'#ffffff',
        dblue:'#18406b',
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
      }
    },
  },
  plugins: [],
}

