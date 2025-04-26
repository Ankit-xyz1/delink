"use server";
import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("Already connected to MongoDB.");
      return;
    }
    let con = await mongoose.connect(process.env.MONGO_URI);
    if (con) {
      console.log("Connected sucessfully");
    }
  } catch (error) {
    console.log("Connection Error:", error);
  }
};
