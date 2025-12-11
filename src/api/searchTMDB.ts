import { tmdbFetch } from "./tmdbFetch";
import { type Media } from "../types/moive";

export function searchTMDB(page = 1, query?: string) {
    if (!query) {
        return Promise.resolve([]);
    }
    return tmdbFetch("/search/multi", true, "zh-CN", {
                query,
                page
            })
                .then((data: { results: Media[] }) => data.results.map(r => ({ ...r })));
}