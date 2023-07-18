import { Schema, model } from 'mongoose';

export interface ISong{
    name: String,
    lyrics: String,
    path: String
}

const SongSchema = new Schema<ISong>({
    name: {type: String, required: true},
    lyrics: {type: String, required: true},
    path: {type: String, required: true}
});

export const Song = model<ISong>('Song', SongSchema, 'songs');
