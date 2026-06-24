import products from '@@/products.json'

export function getAllData() {
    return (event) => {
        // console.log(event);
        return products
    }
}


export function getSingleData() {
    return (event) => {
        
        const productId = event.context.params.id
        const product = products.find(product => product.id == productId)
        return product || {message: 'product not found'}
    }
}