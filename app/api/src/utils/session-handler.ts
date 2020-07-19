import session from 'express-session'
import connect from 'connect-pg-simple'
import db from '../db'
const { SESSION_COOKIE_NAME, SESSION_SECRET } = process.env

const connection = connect(session)
const store = new connection({
  pool: db,
  schemaName: 'api',
  tableName: 'sessions',
})

export default session({
  store,
  name: SESSION_COOKIE_NAME!,
  secret: SESSION_SECRET!,
  resave: false,
  saveUninitialized: true,
  unset: 'destroy',
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days
})
