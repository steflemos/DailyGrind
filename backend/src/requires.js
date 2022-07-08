const Pool = require('pg').Pool
const db = new Pool({
  host: 'localhost',
  database: 'application_database',
  user: 'postgres',
  password: 'senai',
  port: 5432
})