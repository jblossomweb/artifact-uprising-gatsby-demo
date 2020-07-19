import express from 'express'
import * as ctrl from '../controllers/index.ctrl'

const router = express.Router()

router.get('/', ctrl.index)
router.get('/ping', ctrl.ping)

router.get('/session', (req, res) => {
  res.send(req.session)
});

export default router
