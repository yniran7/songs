import express from "express";
import songsRoutes from "./routers/songs.js";
import { connectToDB } from "./utils/mongo_handler.js";
import env from "dotenv";
import { logger, LogLevel } from "./utils/logger.js";

env.config();

const app = express();
const PORT = 5000;
//test 

connectToDB();

app.use((req, res, next) => {
  logger(LogLevel.Debug, `New request, Type: ${req.method}`);
  next();
});
app.use(express.json());
app.use("/songs", songsRoutes);

app.listen(PORT, () => {
  logger(LogLevel.Info, `server running on http://localhost:${PORT}`)
  console.log(`server running on http://localhost:${PORT}`);
});
