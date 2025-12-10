import { tmdbFetch } from "../tmdbFetch";

export function getTVDetail(TVId: number) {
  return tmdbFetch(`/tv/${TVId}`);
}
