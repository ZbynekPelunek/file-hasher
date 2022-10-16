import express, { Request, Response } from 'express';

import { filesRouter } from './routes/files';
import { sequelize } from './sequelize';

const app = express();
const PORT = 3000;

async function assertDatabaseConnectionOk() {
  console.log(`Checking database connection...`);
  try {
    await sequelize.authenticate();
    console.log('Database connection OK!');
    await sequelize.sync({ force: true });
  } catch (error) {
    console.log('Unable to connect to the database:');
    console.log(error);
    process.exit(1);
  }
}

async function init() {
  await assertDatabaseConnectionOk();

  app.use(express.json());

  app.use('/api/v1/files', filesRouter);

  app.all('*', async (req: Request, res: Response) => {
    res.status(404).json({ message: `Route ${req.method} ${req.url} does not exist.` })
  });

  app.listen(PORT, () => {
    console.log('The application is listening on port http://localhost:' + PORT);
  })
};

init();