import { getMediaInfo } from "../../getMediaInfo";

export function getMovieCredits(tvId: number) {
  return getMediaInfo("tv", tvId, "credits");
}
