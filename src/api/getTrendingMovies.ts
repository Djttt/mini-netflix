import { tmdbFetch } from "./tmdbFetch";
import { type Media } from "../types/moive";

export async function getTrendingMovies(page = 1): Promise<Media[]> {
  return tmdbFetch(`/trending/movie/week`, true, "zh-CN", {page})
          .then((data: { results: Media[] }) => 
            data.results.map((r) => ({ ...r, media_type: "movie" })));
}
