import { getMedia } from "../getMedia";

export async function getNowPlayingMovies(page = 1) {
  return getMedia("movie", "now_playing", page);
}

export async function getTopRatedMovies(page = 1) {
  return getMedia("movie", "top_rated", page);
}

export async function getUpcomingMovies(page = 1) {
  return getMedia("movie", "upcoming", page);
}