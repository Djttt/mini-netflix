import { BASE_URL } from "../constants/tmdbURL";

const API_KEY = import.meta.env.VITE_TMDB_KEY;


export async function tmdbFetch(endpoint: string) {
    const res = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}&language=zh-CN`);
    if (!res.ok) throw new Error("TMDB failed!!!")
    return res.json();
}
