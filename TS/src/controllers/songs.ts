import {
  addSong,
  deleteSongById,
  getAllSongs,
  getSongById,
} from "../models/song";
import { logger, LogLevel } from "../utils/logger";
import { Request, Response } from "express";
import {
  ensureError,
  failedToConnectToDB,
  unknownError,
} from "../utils/error_handler";

export const getSongs = async (req: Request, res: Response) => {
  try {
    const songs = await getAllSongs();
    logger(LogLevel.Info, "retrived all songs");
    if (songs.length === 0) res.status(204).send("There are no songs in db");
    else res.send(songs);
  } catch (e) {
    const error = ensureError(e);
    failedToConnectToDB(error, "Failed to retrive all songs", res);
  }
};

export const getSong = async (req: Request, res: Response) => {
  const songId = req.params.songId;
  console.log(songId);
  try {
    const song = await getSongById(songId);
    if (song === null) {
      logger(LogLevel.Info, `song ${songId} not found`);
      res.status(404).send(`song ${songId} not found.`);
      return;
    }
    logger(LogLevel.Info, `retrived song: ${songId}`);
    res.send(song);
  } catch (e) {
    const error = ensureError(e);
    const message = "Failed to retrive song from DB";
    if (error.name === "MongoServerSelectionError") {
      failedToConnectToDB(error, message, res);
    } else if (error.name === "CastError") {
      logger(LogLevel.Error, `${message}, SongID not valid.  ${error}`);
      res.status(400).json({ message: "Not valid song ID. ", error: error });
    } else {
      unknownError(error, "Failed to retrive song by id", res);
    }
  }
};

export const postSong = async (req: Request, res: Response) => {
  const data = req.body;
  try {
    const status = await addSong(data);
    logger(LogLevel.Info, `Added song: ${data.name}.`);
    res.send(`added song: ${data.name}  ${status}`);
  } catch (e) {
    const error = ensureError(e);
    if (error.name === "ValidationError") {
      logger(LogLevel.Error, `Validation Error: ${error}`);
      res.status(400).send(`Validation Error: ${error}`);
    } else if (error.name === "MongoServerSelectionError") {
      failedToConnectToDB(error, "Cannot post new song.", res);
    } else {
      unknownError(error, "Cannot post new song.", res);
    }
  }
};

export const removeSong = async (req: Request, res: Response) => {
  const { songId } = req.params;
  try {
    const status = await deleteSongById(songId);
    if (status.acknowledged) {
      logger(LogLevel.Info, `Deleted song: ${songId}`);
      res.send(`Deleted song: ${songId}`);
    } else {
      res.send(`Song: ${songId} not found, cannot delete song.`);
      logger(LogLevel.Info, `Song: ${songId} not found, cannot delete song.`);
    }
  } catch (e) {
    const error = ensureError(e);
    if (error.name === "MongoServerSelectionError") {
      failedToConnectToDB(error, "Cannot Delete song.", res);
    } else {
      unknownError(error, "Cannot Delete song.", res);
    }
  }
};
