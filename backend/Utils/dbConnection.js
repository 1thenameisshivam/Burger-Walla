import mongoose from "mongoose";
import { MONGO_URL } from "./constant.js";
const dbConnection = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("MongoDB connected");
    });
    mongoose.connection.on("error", (err) => {
      console.log("MongoDB connection error");
      console.log(err);
    });
    await mongoose.connect(MONGO_URL);

    console.log("MongoDB connection successfull");
  } catch (error) {
    console.log("Error in MongoDB connection");
    console.log(error);
  }
};

export default dbConnection;
