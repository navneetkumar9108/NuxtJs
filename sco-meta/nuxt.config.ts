// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  // app: {
  //   head: {
  //     meta: [
  //       // <meta name="viewport" content="width=device-width, initial-scale=1">
  //       {
  //         name:'viewport', content: 'width=device-width, initial-scale=1',
  //       }
  //     ],
  //     script: [
  //       // <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  //       {
  //         src: "https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4",
  //        tagPosition: 'bodyClose'
  //       }
  //     ],
  //     link: [
  //       { rel: 'icon', type: 'image/x-icon', href: '/logo.ico' },
  //       {
  //         rel: 'stylesheet',
  //         href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap'
  //       },
  //     ],
  //     style: [
  //       {textContent:'body{color:red}'}
  //     ],
  //     noscript:[
  //       {textContent:'javascript is required'}
  //     ]
  //   }
  // }
})
