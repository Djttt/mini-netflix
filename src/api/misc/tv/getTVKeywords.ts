import { getMediaInfo } from "../../getMediaInfo";

const getTVKeywords = (tvId: number) => {
  return getMediaInfo("tv", tvId, "keywords");
};

export default getTVKeywords;
