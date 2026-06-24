import products from '@@/products.json'

export default defineEventHandler((event) => {
    const productId = event.context.params.id
    const product = products.find(product => product.id == productId)
    return product
})