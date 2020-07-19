import express from 'express'
import * as ctrl from '../controllers/products.ctrl'

const router = express.Router()

router.get('/', ctrl.getProducts)
router.get('/:id', ctrl.getProduct)

export default router
