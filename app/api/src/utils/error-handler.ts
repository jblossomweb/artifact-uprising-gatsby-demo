import { ErrorRequestHandler, Request, Response, NextFunction } from 'express'
import { RequestError, ServerError } from '../errors'

const errorHandler: ErrorRequestHandler = (
  error: RequestError | ServerError,
  req: Request,
  res: Response,
  next: NextFunction,
)  => {
  console.error(error)
  const { type, message, status } = error
  res.status(status).send({ type, message, status })
}

export default errorHandler
