import express from 'express';
import contactRoutes from './routes/contactRoutes.js';

export const setupServer = () => {
  const app = express();

  app.use(express.json());

  app.use('/api/contacts', contactRoutes);

  app.use((req, res) => {
    res.status(404).json({ message: 'Not Found' });
  });

  return app;
};
