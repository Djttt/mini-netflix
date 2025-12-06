import { tmdbFetch } from "./tmdbFetch";

export function getMovieCredits(movieId: number) {
    return tmdbFetch(`/movie/${movieId}/credits`)
}   