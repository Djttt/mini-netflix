const API_KEY = import.meta.env.VITE_TMDB_KEY;
const BASE_URL = "https://api.themoviedb.org/3";


export async function tmdbFetch(endpoint: string) {
    const res = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}&language=zh-CN`);
    if (!res.ok) throw new Error("TMDB 请求失败")
    return res.json();
}
