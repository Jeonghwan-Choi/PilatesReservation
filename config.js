import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT,
  dbconfig: {
    server: '221.154.8.88',
    port: '1433',
    pool: {
      max: 5,
      min: 1,
      idleTimeoutMillis: 30000,
    },
    options: {
      encrypt: false,
      datebase: 'Techon',
      trustServerCertificate: true,
    },
    authentication: {
      type: 'default',
      options: {
        userName: 'pswel1',
        password: '1234',
      },
    },
  },
};
