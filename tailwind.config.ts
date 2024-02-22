import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      extend: {
        backgroundColor: {
          'transparent': 'var(--rnb-colour-transparent)',
        colors: {
          clearScoreBlue: '#0070f3',
        },
      },
    },
  }

  };
export default config;
