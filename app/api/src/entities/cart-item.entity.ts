import Joi, { Schema } from '@hapi/joi'
import { Schemas } from '../types'
import { Props as Product } from './product.entity'

export interface Props {
  id: number
  qty: number
  title?: Product["title"]
}

export const schemas: Schemas<Props> = {
  id: Joi.number().integer().positive().required(),
  qty: Joi.number().integer().positive().required(),
  title: Joi.string(),
}

export const schema: Schema = Joi.object(schemas)
