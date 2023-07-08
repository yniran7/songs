import env from "dotenv";
import mongoose from "mongoose";
import Song from "./Schema.js";

env.config();
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", (e) => console.error(e));
db.once("open", () => console.log("Connected to Database"));

export const addSong = (songName, songLength) => {
  const newSong = new Song({ name: songName, length: songLength });
  newSong.save();
};
