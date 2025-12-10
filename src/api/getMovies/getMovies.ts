import { getMedia } from "../getMedia";
import { type Media } from "../../types/moive";

export async function getNowPlayingMovies(page = 1) {
  return getMedia("movie", "now_playing", page)
          .then((data: { results: Media[] }) => 
            data.results.map((r) => ({ ...r, media_type: "movie" })));
}

export async function getTopRatedMovies(page = 1) {
  return getMedia("movie", "top_rated", page)
          .then((data: { results: Media[] }) => data.results.map(r => ({ ...r, media_type: "movie" })));
}

export async function getUpcomingMovies(page = 1) {
  return getMedia("movie", "upcoming", page)
          .then((data: { results: Media[] }) => data.results.map(r => ({ ...r, media_type: "movie" })));
}