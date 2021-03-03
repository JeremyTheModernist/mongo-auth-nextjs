import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(`${process.env.MONGO_URL}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    return connect;
  } catch (e) {
    console.log('error', e);
  }
};

export default connectDB;
