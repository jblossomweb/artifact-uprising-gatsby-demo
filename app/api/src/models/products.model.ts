import { ValidationError, NotFoundError, ServerError } from '../errors'
import { Model } from '../types'
import { Props, schemas } from '../entities/product.entity'
import * as productsRepo from '../repos/products.repo'

export const allProducts: Model = (
  filter?: Partial<Props>,
) => productsRepo
  .selectAll()
  .catch(error => {
    throw new ServerError(error.message)
  })

export const productById: Model = async (
  id: number,
) => {
  const validation = schemas.id.validate(id)
  if (validation.error) {
    const { message } = validation.error
    throw new ValidationError(message)
  }
  const rows = await productsRepo
    .selectById(id)
    .catch(error => {
      throw new ServerError(error.message)
    }) as any[]
    
  if (!rows.length) {
    throw new NotFoundError(`product with id ${id} was not found`)
  }
  return rows[0]
}

export const productsByIds: Model = async (
  ids: number[],
) => {
  ids.forEach(id => {
    const validation = schemas.id.validate(id)
    if (validation.error) {
      const { message } = validation.error
      throw new ValidationError(message)
    }
  })
  const rows = await productsRepo
    .selectByIds(ids)
    .catch(error => {
      throw new ServerError(error.message)
    }) as any[]

  return rows
}
