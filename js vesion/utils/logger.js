import { elasticClient } from "../services/elastic_handler.js";


export const logger = (log_level, message) => {
  elasticClient.index({
    index: "logs",
    body: {
      time: new Date().toISOString(),
      level: log_level,
      message: message,
    },
  });
};


export const LogLevel = {
  Info: "Info",
  Error: "error",
  Fatal: "Fatal",
  Debug: "Debug",
  Warning: "Warning"
}