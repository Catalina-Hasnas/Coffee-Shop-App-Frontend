module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#2b130a', 
      secondary: '#c44c0a',
      primaryLight: '#e9e2c3',
      bg: '#f5f6f8'
    },
    fontFamily: {
      'sans': ['Helvetica', 'ui-sans-serif', 'system-ui'],
    },
    extend: {
      backgroundImage: theme => ({
        'header': "url('./assets/images/background-with-coffee-beans.jpg')",
     }),

     height: theme => ({
      'large': '42rem',
      }),

    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
