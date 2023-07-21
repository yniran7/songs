import express from "express";
import songsRoutes from "./routers/songs";
import { connectToDB } from "./utils/mongo_handler";
import { logger, LogLevel } from "./utils/logger";
import { Request, Response, NextFunction } from "express";

const app = express();
const PORT = 5000;

connectToDB();

app.use((req: Request, res: Response, next: NextFunction) => {
  logger(LogLevel.Debug, `New request, Type: ${req.method}`);
  next();
});
app.use(express.json());
app.use("/songs", songsRoutes);

app.listen(PORT, () => {
  logger(LogLevel.Info, `server running on http://localhost:${PORT}`);
});
