/** @type {import('tailwindcss').Config} */
export default {
    content: [ // le decimos a tailwind que ficheros se tiene que mirar para luego poner estilos con css
        './index.html',
        './App.jsx',
        './view/*.jsx'
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}