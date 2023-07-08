import {addSong} from '../services/mongo_handler.js' 

export const getSongs = (req, res) => {
  res.send("getSongs");
};
export const getSong = (req, res) => {
  const { songId } = req.params;
  addSong(songId, 17);
  res.send(songId);
};
export const postSong = (req, res) => {
  res.send("postSong");
};
