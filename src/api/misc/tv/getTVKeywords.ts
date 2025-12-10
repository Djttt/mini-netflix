import { getMediaInfo } from "../../getMediaInfo";

const getTVKeywords = (tvId: number) => {
  return getMediaInfo("movie", tvId, "keywords");
};

export default getTVKeywords;
