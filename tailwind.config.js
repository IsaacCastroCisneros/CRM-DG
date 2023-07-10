/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-login': "url('https://hyper-react.coderthemes.com/static/media/bg-pattern-light.76f84bb3.svg')",
        'bg-fondonav': "url('https://hyper-react.coderthemes.com/static/media/waves.625cbc42.png')",
        "bg-fondoDas" : "url('https://crmaccess.vtiger.com/vtigeraddons/pages/assets/_v20220913_/201804/images/background-mask-20.png')"
      },
      colors:{
        myGray:"#7A8897",
        myGray2:"#AAB1B8",
        myGray3:"#374957",
        myBorder:"#374957",
        primary:"#485BFF",
        myBlue:"#2A50E4",
        myYellow:"#EEAE00",
        bg:"#F8F9FB",
        shadow:'#d9dbda',
        myGreen:'#04EB84',
        myRed:'#E8003F',
      },
      zIndex: {
        'z-100': "100000"
      },
      screens:
      {
        'mob':{'max':'1200px'},
        'mob2':{'max':'570px'},
        'desktop':{'max':'1600px'}
      }
    },
  },
  
  plugins: [],
}
