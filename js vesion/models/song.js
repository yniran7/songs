import Song from "../services/Schema.js";

export const addSong = (songName, songLyrics, songPath) => {
  const newSong = new Song({
    name: songName,
    lyrics: songLyrics,
    path: songPath,
  });
  return newSong.save();
};

export const getSongById = async (songId) => {
  return await Song.findById(songId);
};

export const getAllSongs = async () => {
  return Song.find();
};

export const deleteSongById = (songId) => {
  return Song.deleteOne({ _id: songId });
}
