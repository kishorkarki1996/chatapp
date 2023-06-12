/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  
  theme: {
    extend: {
      colors: {
       
          white: 'rgba(var(--white), <alpha-value>)',
          gray: 'rgba(var(--gray), <alpha-value>)',
          'gray-dark': 'rgba(var(--gray-dark), <alpha-value>)',
          'gray-darkest': 'rgba(var(--gray-darkest), <alpha-value>)',
          'gray-light': 'rgba(var(--gray-light), <alpha-value>)',
          'gray-lightest': 'rgba(var(--gray-lightest), <alpha-value>)',
          'primary': 'rgba(var(--primary), <alpha-value>)',
          'primary-dark': 'rgba(var(--primary-dark), <alpha-value>)',
          'primary-light': 'rgba(var(--primary-light), <alpha-value>)',
          'primary-lightest': 'rgba(var(--primary-lightest), <alpha-value>)',
          'secondary': 'rgba(var(--secondary), <alpha-value>)',
          'secondary-dark': 'rgba(var(--secondary-dark), <alpha-value>)',
          'secondary-light': 'rgba(var(--secondary-light), <alpha-value>)',
          'secondary-lightest': 'rgba(var(--secondary-lightest), <alpha-value>)',
          'info': 'rgba(var(--info), <alpha-value>)',
          'info-dark': 'rgba(var(--info-dark), <alpha-value>)',
          'info-light': 'rgba(var(--info-light), <alpha-value>)',
          'info-lightest': 'rgba(var(--info-lightest), <alpha-value>)',
          'success': 'rgba(var(--success), <alpha-value>)',
          'success-dark': 'rgba(var(--success-dark), <alpha-value>)',
          'success-light': 'rgba(var(--success-light), <alpha-value>)',
          'success-lightest': 'rgba(var(--success-lightest), <alpha-value>)',
          'warning': 'rgba(var(--warning), <alpha-value>)',
          'warning-dark': 'rgba(var(--warning-dark), <alpha-value>)',
          'warning-light': 'rgba(var(--warning-light), <alpha-value>)',
          'warning-lightest': 'rgba(var(--warning-lightest), <alpha-value>)',
      },
     
      
      fontFamily: {
        roboto: "Roboto",
      },
      fontWeight: {
        bold: 700,
        semibold: 500,
        base:400,
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin'),
  ],
  }