import express from 'express'
import * as ctrl from '../controllers/cart.ctrl'

const router = express.Router()

router.get('/', ctrl.getCartTotals);
router.post('/', ctrl.addToCart);
router.delete('/', ctrl.removeFromCart);
router.purge('/', ctrl.emptyCart);

export default router
