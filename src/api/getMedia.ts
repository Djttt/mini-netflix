import { tmdbFetch } from "./tmdbFetch";

// 通用函数：movie 和 tv 都能用
export async function getMedia(
  type: "movie" | "tv",
  category: string,
  page = 1
) {
  return tmdbFetch(`/${type}/${category}`, true, "zh-CN", { page });
}
