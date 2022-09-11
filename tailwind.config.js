/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

    theme: {
      screens: {
        'sm': { 'min': '320px','max': '480px'},
        // => @media (min-width: 640px and max-width: 767px) { ... }
  
        'md': {'min': '481px', 'max': '768px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }
  
        'lg': {'min': '789px', 'max': '1024px'},
        // => @media (min-width: 1024px and max-width: 1279px) { ... }
  
        'xl': {'min': '1029px', 'max': '1279px'},
        // // => @media (min-width: 1280px and max-width: 1535px) { ... }
  
        // '2xl': {'min': '1536px'},
        // // => @media (min-width: 1536px) { ... }
      },
    }, plugins: []
  }
 

// 'min': '320px',