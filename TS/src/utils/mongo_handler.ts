import mongoose from "mongoose";
import { ensureError } from "./error_handler";
import { LogLevel, logger } from "./logger";

export const connectToDB = async () => {
  try {
    await mongoose.connect(
      process.env.DATABASE_URL
        ? process.env.DATABASE_URL
        : "mongodb://localhost:27017"
    );
    console.log("Connected To DB");
  } catch (e) {
    const error = ensureError(e);
    logger(
      LogLevel.Fatal,
      `Could not connect to DB: ${JSON.stringify(error)}. ${error.stack}`
    );
  }

  const db = mongoose.connection;
};
