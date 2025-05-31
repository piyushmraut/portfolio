import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxs': '360px',
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
      },
      boxShadow: {
        primary: "0px 0px 20px rgba(145, 94, 255, 0.25)",
      },
      fontSize: {
        'heading-mobile': ['2rem', { lineHeight: '2.25rem' }],
        'heading-tablet': ['3rem', { lineHeight: '3.25rem' }],
        'heading-desktop': ['4rem', { lineHeight: '4.25rem' }],
      },
    },
  },
  plugins: [],
};

export default config; 