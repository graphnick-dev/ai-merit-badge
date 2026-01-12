/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'bsa-blue': 'var(--bsa-blue)',
        'bsa-blue-light': 'var(--bsa-blue-light)',
        'bsa-red': 'var(--bsa-red)',
      },
    },
  },
  plugins: [],
  safelist: [
    // Timeline color classes
    'bg-blue-600',
    'bg-green-600', 
    'bg-purple-600',
    'bg-orange-600',
    'bg-red-600',
    // Gradient color classes for timeline lines
    'from-blue-400',
    'to-blue-400',
    'via-blue-400',
    'from-green-400',
    'to-green-400',
    'via-green-400',
    'from-purple-400',
    'to-purple-400',
    'via-purple-400',
    'from-orange-400',
    'to-orange-400',
    'via-orange-400',
    'from-red-400',
    'to-red-400',
    'via-red-400',
  ]
};

export default config;