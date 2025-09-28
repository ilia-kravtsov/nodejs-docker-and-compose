import { join } from 'path';

export default () => ({
  port: parseInt(process.env.PORT) || 3001,
  database: {
    type: process.env.DATABASE_TYPE || 'postgres',
    host: process.env.POSTGRES_HOST || 'postgres',
    port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
    username: process.env.POSTGRES_USER || 'student',
    password: process.env.POSTGRES_PASSWORD || 'student',
    database: process.env.POSTGRES_DB || 'kupipodariday',
    entities: [join(__dirname, '/../**/*.entity.{js,ts}')],
    synchronize: process.env.DATABASE_SYNCHRONIZE === 'true',
  },
  jwt: {
    key: process.env.JWT_SECRET || 'defaultKey',
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  },
});
