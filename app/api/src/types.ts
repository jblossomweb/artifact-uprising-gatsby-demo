import { Schema } from '@hapi/joi'
import {
  Request as ExpressRequest,
  Response as ExpressResponse,
  NextFunction,
} from 'express'

export interface Schemas<Props> {
  [field: string]: Schema
}

export type Request = ExpressRequest
export type Response = ExpressResponse
export type Query = string
export type Model = (...args: any[]) => Promise<any | any[]>
export type Controller = (req: Request, res: Response, next: NextFunction) => Promise<void> | void
