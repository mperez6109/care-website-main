const colors = require('tailwindcss/colors')
module.exports = {
    purge: [
        './public/user/themes/caretail/templates/**/*.twig',
        './public/user/themes/caretail/templates/*.twig',
        './resources/caretail-theme/css/*.css'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ['IBM Plex Sans', 'sans-serif'],
            serif: ['IBM Plex Serif', 'serif'],
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            red: colors.red,
            orange: colors.orange,
            yellow: colors.yellow,
            gray: colors.coolGray,
            indigo: colors.indigo,
            care: {
                white: '#FFFFFF',
                ivory: '#F2EDE0',
                sunset: '#B54500',
                sunrise: '#F75C2E',
                grace: '#ABC9BA',
                motion: '#009991',
                boots: '#05474A',
                dusk: '#0F3D42',
            },
            green: {
                100: '#ABC9BA',
                200: '#009991',
                300: '#05474A',
                400: '#0F3D42',
            },
        },
    },
    variants: {
        extend: {
            display: ['group-hover'],
        },
    },
    plugins: [],
}
