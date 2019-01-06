import express from 'express';
import movies from './movies/allMovies';

const api = express();

api.get('/get-movies', (req, res) => {
    res.send(movies);
});

api.listen(8080, () => {
    console.log('Wings is now listening on port 8080');
});