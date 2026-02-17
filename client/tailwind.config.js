module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#b2c1d9',
          300: '#8b9fc6',
          400: '#6b85b3',
          500: '#536fa0',
          600: '#425588',
          700: '#333d70',
          800: '#242858',
          900: '#1a1d40',
        },
        secondary: {
          50: '#f0f7ff',
          100: '#d9ecff',
          200: '#b2d9ff',
          300: '#8bc6ff',
          400: '#64b3ff',
          500: '#3d9fff',
          600: '#2e7bc0',
          700: '#1f5a99',
          800: '#163a72',
          900: '#0d1f4b',
        },
        accent: {
          50: '#f5f3ff',
          100: '#ede9ff',
          200: '#dbd3ff',
          300: '#c9bdff',
          400: '#b7a7ff',
          500: '#a591ff',
          600: '#8a74cc',
          700: '#6f5799',
          800: '#543a66',
          900: '#391d33',
        },
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
        slideIn: 'slideIn 0.5s ease-in-out',
        fadeIn: 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      spacing: {
        '128': '32rem',
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};
