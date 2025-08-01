import mongoose from 'mongoose';

const initMongoConnection = async () => {
  try {
    const DB_URI = process.env.DB_URI;

    if (!DB_URI) {
      throw new Error('DB_URI is not defined in environment variables');
    }

    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

export default initMongoConnection;
