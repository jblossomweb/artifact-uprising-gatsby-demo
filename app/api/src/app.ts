import express from 'express'
import bodyParser from 'body-parser'
import errorHandler from './utils/error-handler'
import sessionHandler from './utils/session-handler'

import indexRoutes from './routes/index.routes'
import productsRoutes from './routes/products.routes'
import cartRoutes from './routes/cart.routes'

const { PORT } = process.env
const app = express()

app.use(bodyParser.json())
app.use(sessionHandler)

app.use('/', indexRoutes)
app.use('/products', productsRoutes)
app.use('/cart', cartRoutes)

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
})
