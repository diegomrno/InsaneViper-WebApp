module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {},
    colors: {
      'mainbrown': '#bc6c25',
    },
    container: {
      center: true,
      
    },
  },
  plugins: [
  ],
}
