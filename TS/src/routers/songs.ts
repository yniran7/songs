import express from "express";
import {getSongs, getSong, postSong, removeSong} from '../controllers/songs'

const router = express.Router();

router.get('/', getSongs);
router.get('/:songId', getSong);
router.post('/', postSong);
router.delete('/:songId', removeSong)

export default router;