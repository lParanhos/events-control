module.exports = {
  purge:  {
    enable: process.env.NODE_ENV === 'production',
    content: [
      './public/index.html',
      './src/*.svelte'
    ]
  },
  theme: {
    extend: {},
  },
  variants: {},
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  plugins: [require("@tailwindcss/ui")],
}
