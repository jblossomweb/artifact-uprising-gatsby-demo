import { Request, Response, NextFunction } from 'express'

const { CORS_ALLOW_ORIGIN } = process.env

export default (req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", CORS_ALLOW_ORIGIN)
  res.header("Access-Control-Allow-Credentials", "true")
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PURGE")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
}
