import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        headerHide: {
          '0%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(1rem)' },
          '100%': { transform: 'translateY(-7rem)' }
        },
        headerShow: {
          '0%': { transform: 'translateY(-7rem)' },
          '50%': { transform: 'translateY(1rem)' },
          '100%': { transform: 'translateY(0rem)' }
        },
        blob: {
          '0%, 100%': {borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'},
          '25%': {borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%'},
          '50%': {borderRadius: '40% 30% 20% 30% / 70% 40% 60% 20%'}
        }
      },
      animation: {
        headerHide: 'headerHide 0.5s ease-in-out',
        headerShow: 'headerShow 0.5s ease-in-out',
        blob: 'blob 15s ease-in-out infinite'
      }
    },
    fontFamily: {
      'lemon': ['Lemon'],
      'unbounded': ['Unbounded'],
      'carter': ['Carter One'],
      'nunito': ['Nunito'],
      'Righteous': ['Righteous']
    },
  },
  plugins: [],
};
export default config;
