module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            spacing: {
                '30': '120px',
            },
            colors: {
                purple: '#7200a1',
                ['purple-light']: '#b607ff',
                primary: '#fff',
                secondary: 'rgba(255,255,255,0.5)',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
