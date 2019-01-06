import express from 'express';
import movies from './movies/allMovies';

const api = express();

api.use((_, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    next();
})


api.get('/get-movies', (req, res) => {
    res.send(movies);
});

api.listen(8080, () => {
    console.log('Wings is now listening on port 8080');
});