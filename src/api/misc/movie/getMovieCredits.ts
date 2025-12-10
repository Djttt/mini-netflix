import { getMediaInfo } from "../../getMediaInfo";

export function getMovieCredits(movieId: number) {
  return getMediaInfo("movie", movieId, "credits");
}
