import { tmdbFetch } from "./tmdbFetch"

const getMovieVideos = (movieId: number) => {
    return tmdbFetch(`/movie/${movieId}/videos`, false);
}   

export default getMovieVideos;