/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{html,js,jsx}",
        "./src/*.{html,js,jsx}",
        "./index.html",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#160442',
                secondary: '#F78C22',
                baseColor: '#f9fafc',
            },
        },
    },
    plugins: [],
}

