import mongoose from "mongoose";
import { ensureError } from "./error_handler";
import { LogLevel, logger } from "./logger";
import { DATABASE_URL } from "../config";

export const connectToDB = async () => {
  try {
    await mongoose.connect(DATABASE_URL);
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
