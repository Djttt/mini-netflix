import { getMediaInfo } from "../../getMediaInfo";

export function getTVCredits(tvId: number) {
  return getMediaInfo("tv", tvId, "credits");
}
