/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   "./src/**/*.{js,jsx,ts,tsx}",
 ],
 daisyui: {
   themes: [
     {
       mytheme: {
       
"primary": "#5F8D4E",
       
"secondary": "#EEEEEE",
       
"accent": "#E5D9B6",
       
"neutral": "#3D4451",
       
"base-100": "#FFFFFF",
       
"info": "#3ABFF8",
       
"success": "#36D399",
       
"warning": "#FBBD23",
       
"error": "#F87272",
       },
     },
   ],
 },
 plugins: [require("daisyui")],
}
