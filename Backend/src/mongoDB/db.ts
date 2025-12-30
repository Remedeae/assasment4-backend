import "dotenv/config";
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const url = process.env.DB_URL;
    if (!url) {
      throw new Error("Missing DB_URL from .env");
    }
    await mongoose.connect(url);
    console.log("Connection to MongoDB successfull");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;
