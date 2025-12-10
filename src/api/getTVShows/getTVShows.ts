import { getMedia } from "../getMedia";

// TV Shows
export const getTrendingTV = (page = 1) =>
  getMedia("tv", "popular", page);

export const getNowPlayingTV = (page = 1) =>
  getMedia("tv", "now_playing", page);

export const getTopRatedTV = (page = 1) =>
  getMedia("tv", "top_rated", page);

export const getAiringTodayTV = (page = 1) =>
  getMedia("tv", "airing_today", page);