import express from "express";
import songsRoutes from "./routers/songs";
import { connectToDB } from "./utils/mongo_handler";
import env from "dotenv";
import { logger, LogLevel } from "./utils/logger";

env.config();

const app = express();
const PORT = 5000;

connectToDB();

app.use((req, res, next) => {
  logger(LogLevel.Debug, `New request, Type: ${req.method}`);
  next();
});
app.use(express.json());
app.use("/songs", songsRoutes);

app.listen(PORT, () => {
  logger(LogLevel.Info, `server running on http://localhost:${PORT}`)
});
