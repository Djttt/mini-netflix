import { BASE_URL } from "../constants/tmdbURL";

const API_KEY = import.meta.env.VITE_TMDB_KEY;


export async function tmdbFetch(endpoint: string, useLanguageParam = true, language = "zh-CN") {
    let res: Response;
    if (useLanguageParam) {
        res = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}&language=${language}`);
    } else {
        res = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}`);
    }

    if (!res.ok) throw new Error("TMDB failed!!!");
    return res.json();
}
