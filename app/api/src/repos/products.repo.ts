import dbQuery from '../utils/db-query'
import selectAllQuery from '../queries/selectAllProducts.sql'
import selectByIdQuery from '../queries/selectProductById.sql'
import selectByIdsQuery from '../queries/selectProductsByIds.sql'

export const selectAll = () => dbQuery(selectAllQuery)
export const selectById = (id: number) => dbQuery(selectByIdQuery, [id])
export const selectByIds = (ids: number[]) => dbQuery(selectByIdsQuery, [ids])
