import env from "dotenv";
import mongoose from "mongoose";
import Song from "./Schema.js";

env.config();
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", (e) => console.error(e));
db.once("open", () => console.log("Connected to Database"));

export const addSong = (songName, songLyrics, songPath) => {
  const newSong = new Song({ name: songName, lyrics: songLyrics, path: songPath });
  newSong.save();
};

export const getSongById = (songId) => {
  return Song.findById(songId);
};

export const getAllSongs = async () => {
  return Song.find();
};

export const deleteSongById = (songId) => {
  return Song.deleteOne({ _id: songId });
};
