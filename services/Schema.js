import mongoose from 'mongoose';

const SongSchema = mongoose.Schema({
    name: String,
    lyric: String,
    path: String
});

const Song = mongoose.model('Song', SongSchema, 'songs');

export default Song;