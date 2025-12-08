import { tmdbFetch } from "../tmdbFetch";

export async function getNowPlayingMovies(page = 1) {
  return tmdbFetch(`/movie/now_playing`, true, "zh-CN", {page});
}

export async function getTopRatedMovies(page = 1) {
  return tmdbFetch(`/movie/top_rated`, true, "zh-CN", {page});
}

export async function getUpcomingMovies(page = 1) {
  return tmdbFetch(`/movie/upcoming`, true, "zh-CN", {page});
}