/** CONNECTING TO MONGODB */
import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(`There was an Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectToDatabase;
