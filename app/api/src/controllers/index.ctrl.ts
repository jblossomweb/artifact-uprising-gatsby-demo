import { Controller } from '../types'

export const index: Controller = async (req, res, next) => {
  res.status(200)
  res.send({
    message: 'API is up and running.',
  })
}

export const ping: Controller = async (req, res, next) => {
  const { ip } = req
  res.status(200)
  res.send({
    message: 'Pong',
    ip,
  })
}
