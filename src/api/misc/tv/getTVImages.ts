import { getMediaInfo } from "../../getMediaInfo";

const getTVImages = (tvId: number) => {
    return getMediaInfo("tv", tvId, "images");
}

export default getTVImages;