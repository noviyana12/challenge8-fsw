require('dotenv').config();
const path = require('path');

const DB_TEST_PATH = path.join(__dirname, '../db/testing.sqlite');
/*
const {
  DB_USER, DB_PASSWORD, DB_NAME, DB_HOST, DB_PORT,
} = process.env;
*/

const {
  DB_USER = 'postgres',
  DB_PASSWORD = 'admin',
  DB_NAME = 'binarcar',
  DB_HOST = '127.0.0.1',
  DB_PORT = '5432',
} = process.env;

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}_development`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
    ssl: true,
  },
  test: {
    storage: DB_TEST_PATH,
    logging: false,
    dialect: 'sqlite',
  },
  production: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}_production`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
