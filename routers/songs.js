import express from "express";
import {getSongs, getSong, postSong} from '../controllers/songs.js'

const router = express.Router();

router.get('/', getSongs);
router.get('/:songId', getSong);
router.post('/', postSong);

export default router;