import * as dotenv from 'dotenv';

dotenv.config({path: `${__dirname}/../.env`});

export default {
  db_port: parseInt(process.env.DB_PORT, 10) || 5432,
  db_host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};
