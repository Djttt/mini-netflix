import { getMediaInfo } from "../../getMediaInfo";

const getMovieImages = (movieId: number) => {
    return getMediaInfo("movie", movieId, "images");
}

export default getMovieImages;