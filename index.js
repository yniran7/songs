import express from "express";
import songsRoutes from "./routers/songs.js";
import { connectToDB } from "./utils/mongo_handler.js";
import env from "dotenv";
 
env.config();

const app = express();
const PORT = 5000;

connectToDB();


app.use((req, res, next) => {
  console.log('New request, Type: ', req.method)
  next()
})
app.use(express.json());
app.use("/songs", songsRoutes);


app.listen(PORT, () =>
  console.log(`server running on http://localhost:${PORT}`)
);
