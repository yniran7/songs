import {
  addSong,
  getSongById,
  getAllSongs,
  deleteSongById,
} from "../services/mongo_handler.js";

export const getSongs = async (req, res) => {
  const songs = await getAllSongs();
  res.send(songs);
};
export const getSong = (req, res) => {
  const songId = req.params.songId;
  getSongById(songId).then((song) => {
    res.send(song);
  });
};
export const postSong = (req, res) => {
  const data = req.body;
  addSong(data.name, data.lyrics, data.path);
  res.send('added song: ' + data.name);
};
export const removeSong = (req, res) => {
  const { songId } = req.params;
  deleteSongById(songId).then((reualt) => {
    res.send(reualt);
  });
};
