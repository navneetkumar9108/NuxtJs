// import products from "@@/products.json";
// import {createRouter,defineEventHandler,useBase} from 'h3'

// const router = createRouter()
// router.get('/all', defineEventHandler((event) => products))
// router.get('/create', defineEventHandler((event) => 'Hello Post Request'))

// export default useBase('/api/users',router.handler)

// separating logic 
import {createRouter,defineEventHandler,useBase} from 'h3'
import { getAllData, getSingleData } from './handlers'

const router = createRouter()
router.get('/all', defineEventHandler(getAllData()))
router.get('/:id', defineEventHandler(getSingleData()))

router.post('/create', defineEventHandler((event) => 'Hello Post Request'))
export default useBase('/api/users',router.handler)