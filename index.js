import express from "express";
import songsRoutes from "./routers/songs.js";
import { connectToDB } from "./utils/mongo_handler.js";
import env from "dotenv";
import { elasticClient } from "./utils/elastic_handler.js";

env.config();
console.log(process.env.ELASTIC_API_KEY)
console.log(process.env.ELASTIC_API_ID)
await elasticClient.get({
  index: 'test_index',
  id: 'my_document_id',
})

const app = express();
const PORT = 5000;

connectToDB();

log("error", "this is an error message");

app.use((req, res, next) => {
  console.log("New request, Type: ", req.method);
  next();
});
app.use(express.json());
app.use("/songs", songsRoutes);

app.listen(PORT, () =>
  console.log(`server running on http://localhost:${PORT}`)
);
