/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{ts,tsx,js}',
    './components/**/*.{html,js}',
    // './pages/*.{ts,tsx,js}',
    // './components/*.{html,js}',
  ],
  plugins: [require('flowbite/plugin')],
  theme: {},
  // darkMode: 'class',
};
