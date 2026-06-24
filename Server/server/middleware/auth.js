export default defineEventHandler(() => {
    console.log('Middleware hu mai');
    const isLoggedIn = true
    if (!isLoggedIn) {
        throw new Error('Not Authenticated')
    }
})