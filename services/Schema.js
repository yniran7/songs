import mongoose from 'mongoose';

const SongSchema = mongoose.Schema({
    name: String,
    length: Number
});

const Song = mongoose.model('Song', SongSchema, 'songs');

export default Song;