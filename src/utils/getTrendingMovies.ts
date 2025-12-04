import { tmdbFetch } from "./tmdbFetch"

export async function getTrendingMovies() {
    return tmdbFetch("/trending/movie/week");
}