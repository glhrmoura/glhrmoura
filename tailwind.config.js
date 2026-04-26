/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontWeight: {
        bold: '900',
      },
      colors: {
        theme: {
          bg: 'var(--color-bg)',
          text: 'var(--color-text)',
          border: 'var(--color-border)',
          fg: 'var(--color-fg)',
          primary: '#23c063',
        },
      },
    },
  },
  plugins: [],
};
