import { getMediaInfo } from "../../getMediaInfo";

const getTVVideos = (tvId: number) => {
    return getMediaInfo("movie", tvId, "videos");
}   

export default getTVVideos;