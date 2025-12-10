import { getMediaInfo } from "../../getMediaInfo";

const getMovieVideos = (movieId: number) => {
    return getMediaInfo("movie", movieId, "videos");
}   

export default getMovieVideos;