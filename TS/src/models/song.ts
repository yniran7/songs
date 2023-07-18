import { Song, ISong } from "../services/Schema";
import { DeleteResult } from "mongodb";

export const addSong = (song: ISong): Promise<ISong> => {
  const newSong = new Song({
    name: song.name,
    lyrics: song.lyrics,
    path: song.path,
  });
  return newSong.save();
};

export const getSongById = async (songId: string): Promise<ISong | null> => {
  return Song.findById(songId).exec();
};

export const getAllSongs = async (): Promise<ISong[]> => {
  return Song.find().exec();
};

export const deleteSongById = (songId: string): Promise<DeleteResult> => {
  return Song.deleteOne({ _id: songId }, { lean: true }).exec();
};
