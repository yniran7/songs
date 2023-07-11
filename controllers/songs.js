import {
  addSong,
  deleteSongById,
  getAllSongs,
  getSongById,
} from "../models/song.js";

export const getSongs = async (req, res) => {
  try {
    const songs = await getAllSongs();
    res.send(songs);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Can not perform find operation.", error: error });
  }
};

export const getSong = async (req, res) => {
  const songId = req.params.songId;
  try {
    const song = await getSongById(songId);
    res.send(song);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Can not perform find operation.", error: error });
  }
};

export const postSong = async (req, res) => {
  const data = req.body;
  try {
    const status = await addSong(data.name, data.lyrics, data.path);
    res.send(`added song: ${data.name}  ${status}`);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Can not perform post operation.", error: error });
  }
};

export const removeSong = async (req, res) => {
  const { songId } = req.params;
  try {
    const status = await deleteSongById(songId);
    res.send(status);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Can not perform delete operation.", error: error });
  }
};
