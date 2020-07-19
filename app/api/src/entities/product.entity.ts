import Joi, { Schema } from '@hapi/joi'
import { Schemas } from '../types'

export interface Props {
  id: number
  title: string
  description?: string
  price: number
}

export const schemas: Schemas<Props> = {
  id: Joi.number().integer().positive(),
  title: Joi.string(),
  description: Joi.string(),
  price: Joi.string(),
  price_numeric: Joi.number().positive(),
}

export const schema: Schema = Joi.object(schemas)
