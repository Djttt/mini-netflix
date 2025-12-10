import { getMedia } from "../getMedia";
import { type Media } from "../../types/moive";

// TV Shows
export const getTrendingTV = (page = 1) => {
   return getMedia("tv", "popular", page)
    .then((data: { results: Media[] }) => data.results.map(r => ({ ...r, media_type: "tv" })));
}
 

export const getOnTheAirTV = (page = 1) => {
  return getMedia("tv", "on_the_air", page)
    .then((data: { results: Media[] }) => data.results.map(r => ({ ...r, media_type: "tv" })));
}
  

export const getTopRatedTV = (page = 1) => {
  return getMedia("tv", "top_rated", page)
    .then((data: { results: Media[] }) => data.results.map(r => ({ ...r, media_type: "tv" })));;
}
  

export const getAiringTodayTV = (page = 1) => {
  return getMedia("tv", "airing_today", page)
        .then((data: { results: Media[] }) => data.results.map(r => ({ ...r, media_type: "tv" })));;
}
 