import { tmdbFetch } from "./tmdbFetch";

export function getMovieDetail(movieId: number) {
    return tmdbFetch(`/movie/${movieId}`)
}