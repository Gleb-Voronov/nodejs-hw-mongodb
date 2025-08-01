import dotenv from 'dotenv';
import { setupServer } from './server.js';
import initMongoConnection from './db/initMongoConnection.js';

dotenv.config();

const startServer = async () => {
  await initMongoConnection();
  const server = setupServer();

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
