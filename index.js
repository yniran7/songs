import express from 'express';
import bodyParser from 'body-parser';

import songsRoutes from './routers/songs.js'

const app = express();

const PORT = 5000;

app.use(bodyParser.json());
app.use('/songs', songsRoutes);

app.get('/', (req, res) => res.send('Home page'))

app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`));