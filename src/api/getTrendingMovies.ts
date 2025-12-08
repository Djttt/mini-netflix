import { tmdbFetch } from "./tmdbFetch";

export async function getTrendingMovies(page = 1) {
  return tmdbFetch(`/trending/movie/week`, true, "zh-CN", {page});
}
