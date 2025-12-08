import { BASE_URL } from "../constants/tmdbURL";

const API_KEY = import.meta.env.VITE_TMDB_KEY;


export async function tmdbFetch(endpoint: string, 
    useLanguageParam = true, 
    language = "zh-CN",
    params: Record<string, string | number> = {}
) {

    const search = new URLSearchParams();

    search.set("api_key", API_KEY);
    if (useLanguageParam) {
        search.set("language", language);
    }

    // 添加额外参数，比如 page, query...
    Object.entries(params).forEach(([key, value]) => {
        search.set(key, String(value));
    });
    const url = `${BASE_URL}${endpoint}?${search.toString()}`;

    const res = await fetch(url);

    if (!res.ok) throw new Error("TMDB failed!!!");
    return res.json();
}
