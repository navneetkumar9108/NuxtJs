import products from "@@/products.json";

export default defineEventHandler((event) => {
    const query = getQuery(event)
    const productId = query.id
    const product = products.find(product => product.id == productId)
    // Returning other status codes
    setResponseStatus(event, 202)
    return product
})