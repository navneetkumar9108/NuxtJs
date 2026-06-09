// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

   css: [
 
    // CSS file in the project
     '~/assets/css/style.css',
    //  './app/assets/css/style.css'
    
  ],
    app: {
     head: {
       script:[{src:'_nuxt/assets/js/myscript.js',body:true}]
     }
   }
})
