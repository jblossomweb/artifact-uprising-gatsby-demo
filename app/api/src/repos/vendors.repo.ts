import dbQuery from '../utils/db-query'
import selectAllQuery from '../queries/selectAllVendors.sql'
import selectByIdQuery from '../queries/selectVendorById.sql'

export const selectAll = () => dbQuery(selectAllQuery)
export const selectById = (id: number) => dbQuery(selectByIdQuery, [id])
