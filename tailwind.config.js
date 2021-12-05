module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            spacing: {
                '30': '120px',
            },
            colors: {
                primary: 'var(--text-primary)',
                secondary: 'var(--text-secondary)',
                purple: 'var(--purple-primary)',
                'link-hover': 'var(--link-text-hover)',
                'bd-primary': 'rgba(255,255,255,0.1)',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
