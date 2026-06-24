// sending Redirect
export default defineEventHandler((event) => {
    sendRedirect(event,'/api/products',302)
})