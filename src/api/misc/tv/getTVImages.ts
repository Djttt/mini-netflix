import { getMediaInfo } from "../../getMediaInfo";

const getTVImages = (tvId: number) => {
    return getMediaInfo("movie", tvId, "images");
}

export default getTVImages;