import { Pool } from 'pg'
const { DB_CONNECT } = process.env
export default new Pool({ connectionString: DB_CONNECT })
