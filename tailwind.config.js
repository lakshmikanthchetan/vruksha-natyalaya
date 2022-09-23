/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{ts,tsx,js}',
    './components/**/*.{html,js}',
  ],
  plugins: [require('flowbite/plugin')],
  theme: {
    colors: {
      primary: '#ca8a04',
      secondary: '#4f000b',
      tertiary: '#36454F',
    },
  },
};
