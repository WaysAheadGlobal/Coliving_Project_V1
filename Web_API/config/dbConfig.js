const mysql = require('mysql2/promise');  // Use 'mysql2/promise' for promise-based connection
const dotenv = require('dotenv');

dotenv.config();

const dbConfig = {
  local: {
    host: process.env.LOCAL_DB_HOST || '127.0.0.1',
    user: process.env.LOCAL_DB_USER || 'root',
    password: process.env.LOCAL_DB_PASSWORD || '123456',
    database: process.env.LOCAL_DB_DATABASE || 'coliving',
  },
  prod: {
    host: process.env.PROD_DB_HOST,
    user: process.env.PROD_DB_USER,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_DATABASE,
  },
};

// Choose the appropriate configuration based on the environment
const env = process.env.NODE_ENV || 'local';
const config = dbConfig[env];

if (!config) {
  console.error(`Invalid environment: ${env}`);
  process.exit(1);
}

// Create a connection pool using the chosen configuration
const pool = mysql.createPool(config);

// Check database connection
(async () => {
  try {
    const connection = await pool.getConnection();
    console.log('Database connected successfully');
    connection.release();
  } catch (error) {
    console.error('Error connecting to database:', error.message);
    process.exit(1);
  }
})();

module.exports = pool;