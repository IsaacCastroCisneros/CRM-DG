/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
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
        'navBar': "#313a46",
        'fontIcon' : "#DCDEFC",
        'colorIconDas': "#727CF5",
        'activate': "#7B7EF6",
        bg:"#fafbfe",
        bg1:"#313a46",
        bgHover:"#3c4655",
        myLitePurple:"#727cf5",
        myLitePurpleHover:"#6169d0",
        myBlack:"#1A1927",
        mySearchField:"#3c4655",
        myText2:"#6c757d",
        myText:"#98a6ad", 
        myTextInput:"#6c757d",
        myTitle:"#6c757d",
        myWhite:"#fff",
        myBorder:"#dee2e6",
        myBorderDark:"#b8b9ba",
        myRed:"#fa5c7c",
        myRedDark:"#d54e69",
        myGreen:"#0acf97",
        myGray:"#F5F6F8",
        myGreenDark:"#09b080",
        myYellow:"#ffc626",
        myYellowDark:"#ffbc00",
        primary:"#2D62ED",
        inputBorder:"#717171" 
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
