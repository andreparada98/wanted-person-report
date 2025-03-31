/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts,scss}'],
    theme: {
        extend: {
            colors: {
                primary: '#3b82f6', // Azul
                'primary-hover': '#2563eb',
                secondary: '#d1d5db', // Cinza claro
                'secondary-hover': '#9ca3af',
            },
            borderRadius: {
                btn: '0.375rem',
            },
            boxShadow: {
                btn: '0 1px 2px rgba(0, 0, 0, 0.05)',
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ['hover', 'disabled'],
            cursor: ['disabled'],
            opacity: ['disabled'],
        },
    },
    plugins: [],
};
