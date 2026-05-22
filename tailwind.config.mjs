/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a2e',
        secondary: '#16213e',
        accent: '#e94560',
        accent2: '#f5a623',
        gold: '#d4af37',
        line: '#06c755',
      },
      fontFamily: {
        sans: ['Noto Sans JP', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 20px rgba(0,0,0,0.12)',
        hover: '0 8px 30px rgba(0,0,0,0.2)',
      },
      borderRadius: {
        card: '12px',
        btn: '50px',
      }
    },
  },
  plugins: [],
};
