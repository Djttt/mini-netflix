import { tmdbFetch } from "./tmdbFetch";

export const getMediaInfo = (
    type: "movie" | "tv",
    id: number,
    categroy: string,
) => {
    return tmdbFetch(`/${type}/${id}/${categroy}`, false);
}