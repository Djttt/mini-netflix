import { getMediaInfo } from "../../getMediaInfo";

const getMovieKeywords = (movieId: number) => {
  return getMediaInfo("movie", movieId, "keywords");
};

export default getMovieKeywords;
