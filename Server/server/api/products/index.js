import products from '@@/products.json'

export default defineEventHandler((event) => {
    // Accessing runtime config
    const config = useRuntimeConfig()
    console.log('Config:',config);
    console.log('Config Key:', config.KEY);
    
    // Accessing Runtime Cookies
    const cookies = parseCookies(event)
    console.log('Cookies:',cookies);
    return products
})