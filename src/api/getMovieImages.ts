import { tmdbFetch } from "./tmdbFetch";

const getMovieImages = (movieId: number) => {
    return tmdbFetch(`/movie/${movieId}/images`, false);
}

export default getMovieImages;