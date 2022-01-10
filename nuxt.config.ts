import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({



    srcDir: './',
    buildModules: [
        ['@nuxtjs/dotenv', { filename: '.env.local' }],
  ],


    build: {
      postcss: {
        postcssOptions: {
          plugins: {
            tailwindcss: {},
            autoprefixer: {},
          }
        }
      },
    }
})
