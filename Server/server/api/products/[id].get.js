import products from '@@/products.json'

// export default defineEventHandler((event) => {
//     const productId = event.context.params.id
//     const product = products.find(product => product.id == productId)
//     return product || {'message': 'product not found'}
// })


export default defineEventHandler((event) => {
    const productId = parseInt(event.context.params.id)
    if (!Number.isInteger(productId)) {
        throw createError({
            statusMessage:'Id should be an Integer',
            statusCode:'400'
        })
    }
    const product = products.find(product => product.id == productId)
    return product || {'message': 'product not found'}
})