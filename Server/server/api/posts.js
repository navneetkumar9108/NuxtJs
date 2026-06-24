import products from '@@/products.json'
// export default defineEventHandler((event) => {
  
//   console.log(event);
//     return {
//     hello: 'world',
//   }
// })



export default defineEventHandler((event) => {
  
    // console.log(event);
    // if (event.node.req.method === 'POST') {
    //     return {
    //         'message':'Post Request Success'
    //     }
    // }
    return products
})
