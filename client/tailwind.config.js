/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [

      {
        mytheme: {
        
"primary": "#00a6ff",
        
"secondary": "#009ea8",
        
"accent": "#0000ff",
        
"neutral": "#19221a",
        
"base-100": "#ffffff",
        
"info": "#0079c7",
        
"success": "#49a400",
        
"warning": "#ed7f00",
        
"error": "#ff004b",
        },
      },
    ],
  },


  plugins: [require("daisyui")],
  
};

