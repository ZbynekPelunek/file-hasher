import * as dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

import { UploadedFile } from '../models/uploadedFile';

dotenv.config();

const databaseName = process.env.DATABASE_NAME ?? 'database';
const dbUsername = process.env.DB_USERNAME ?? 'user';
const dbPassowrd = process.env.DB_PASSWORD ?? 'pass';
const dbHost = process.env.DB_HOST ?? 'example.com';
const dbPort = process.env.DB_PORT ?? 5432;

export const sequelize = new Sequelize(databaseName, dbUsername, dbPassowrd, {
  dialect: 'postgres',
  host: dbHost,
  port: +dbPort
});

const modelDefiners = [
  UploadedFile
]

for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}