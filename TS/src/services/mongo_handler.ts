import env from "dotenv";
import mongoose from "mongoose";
import { logger, LogLevel } from "../utils/logger";
import {Song, ISong} from "./Schema.js";

env.config();
mongoose.connect(process.env.DATABASE_URL? process.env.DATABASE_URL:"mongodb://localhost:27017");

const db = mongoose.connection;

db.on("error", (e) => {
  logger(LogLevel.Error, `failed to connect to DB: ${e}`);
});
db.once("open", () => {
  logger(LogLevel.Info, `Connected to Database`);
});

export const addSong = (song: ISong) => {
  const newSong = new Song({
    name: song.name,
    lyrics: song.lyrics,
    path: song.path,
  });
  newSong.save();
};

export const getSongById = (songId: string) => {
  return Song.findById(songId);
};

export const getAllSongs = async () => {
  return Song.find();
};

export const deleteSongById = (songId: string) => {
  return Song.deleteOne({ _id: songId });
};
