// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app:{
    head: {
      // using css and js globally
      link: [{ rel: 'StyleSheet', href: 'css/style.css' }],
      script:[{src:'js/myScript.js', body :true}]
    }
  }

})
