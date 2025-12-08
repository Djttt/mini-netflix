import { tmdbFetch } from "./tmdbFetch"

const getMovieKeywords = (movieId: number) => {
    return tmdbFetch(`/movie/${movieId}/keywords`, false);
}

export default getMovieKeywords;