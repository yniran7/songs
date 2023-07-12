import {
  addSong,
  deleteSongById,
  getAllSongs,
  getSongById,
} from "../models/song.js";
import { logger, LogLevel } from "../utils/logger.js";

export const getSongs = async (req, res) => {
  try {
    const songs = await getAllSongs();
    logger(LogLevel.Info, "retrived all songs");
    res.send(songs);
  } catch (error) {
    logger(LogLevel.Error, "Feild to retrive all songs from DB. " + error);
    return res
      .status(400)
      .json({ message: "Can not perform find operation.", error: error });
  }
};

export const getSong = async (req, res) => {
  const songId = req.params.songId;
  try {
    const song = await getSongById(songId);
    logger(LogLevel.Info, `retrived song: ${songId}`);
    res.send(song);
  } catch (error) {
    logger(LogLevel.Error, `Feild to retrive all songs from DB. ` + error);
    return res
      .status(400)
      .json({ message: "Can not perform find operation.", error: error });
  }
};

export const postSong = async (req, res) => {
  const data = req.body;
  try {
    const status = await addSong(data.name, data.lyrics, data.path);
    logger(LogLevel.Info, `Added song: ${data.name}.`);
    res.send(`added song: ${data.name}  ${status}`);
  } catch (error) {
    logger(LogLevel.Error, `Failed to ADD song from DB. ` + error);
    return res
      .status(400)
      .json({ message: "Can not perform post operation.", error: error });
  }
};

export const removeSong = async (req, res) => {
  const { songId } = req.params;
  try {
    const status = await deleteSongById(songId);
    logger(LogLevel.Info, `Deleted song: ${songId}`);
    res.send(status);
  } catch (error) {
    logger(LogLevel.Error, `Failed to remove song from DB. ` + error);
    return res
      .status(400)
      .json({ message: "Can not perform delete operation.", error: error });
  }
};
