import { Response } from "express";
import { logger, LogLevel } from "../utils/logger";

export const ensureError = (value: unknown): Error => {
  if (value instanceof Error) return value;

  let stringified = "[Unable to stringify the thrown value]";
  try {
    stringified = JSON.stringify(value);
  } catch {}

  const error = new Error(
    `This value was thrown as is, not through an Error: ${stringified}`
  );
  return error;
};

export const failedToConnectToDB = (
  error: Error,
  message: string,
  res: Response
) => {
  logger(LogLevel.Error, `${message}. Lost connection to DB. ${error}`);
  res.status(503).json({ message: "DB unavailable", error: error });
};

export const unknownError = (error: Error, message: string, res: Response) => {
  logger(LogLevel.Error, `${message}. Unknown error. ${error}`);
  res.status(500).json({ message: "Unknown error", error: error });
};
