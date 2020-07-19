import db from '../db'

const dbQuery = (
  query: string,
  binds?: Array<string | number | string[] | number[]> | any
) => new Promise((resolve, reject) => {
  db.query(query, binds || [], (error, result) => {
    if (error) {
      reject(error)
    } else {
      resolve(result.rows as any[])
    }
  })
})

export default dbQuery
