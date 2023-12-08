// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules : ['@nuxtjs/tailwindcss'],
  app : {
    head : {
      title : 'DevelUp',
      meta : [
        {name : 'description' , content : 'DevelUp website'}
      ],
      link : [
        { rel : 'stylesheet' , href : 'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
