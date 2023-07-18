import { elasticClient } from "../services/elastic_handler";
import { ensureError } from "./error_handler";

export enum LogLevel {
  Info = "Info",
  Error = "error",
  Fatal = "Fatal",
  Debug = "Debug",
  Warning = "Warning",
}

export const logger = (log_level: LogLevel, message: string) => {
  elasticClient
    .index({
      index: "logs",
      body: {
        time: new Date().toISOString(),
        level: log_level,
        message: message,
      },
    })
    .catch((e) => {
      const error = ensureError(e);
      if (error.name === "ConnectionError") {
        console.error("cannot cpnnect to Elastic, not writing logs. ");
      } else {
        console.error("Unknown Elastic error, not writing logs.");
      }
    });
};
