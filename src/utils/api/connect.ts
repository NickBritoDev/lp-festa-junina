'use server'
import mysql from 'mysql2/promise'

const config = {
  host: 'database.grupogmvb.com',
  user: 'grupogmvb',
  password: 'bruno0422LA',
  database: 'grupogmvb',
  dialect: 'mysql',
  timezone: '-03:00',
  logging: false
}

const connect = async (): Promise<any> => {
  const connection = await mysql.createConnection(config)
  return connection
}

export { connect }
