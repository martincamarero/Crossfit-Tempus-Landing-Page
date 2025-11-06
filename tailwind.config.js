// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}', './public/**/*.html'],
  theme: {
    extend: {
      colors: {
        primary: '#023c72',
        light: '#1b78bd',
        // Puedes añadir otros colores aquí si los usas
      },
      screens: {
        // Aquí defines tus breakpoints personalizados si lo deseas
        xs: '370px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
