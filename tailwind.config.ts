// tailwind.config.ts
export default {
    darkMode: 'class', // ← enables toggling with a class
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};