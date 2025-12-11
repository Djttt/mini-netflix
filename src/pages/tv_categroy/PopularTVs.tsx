import Medias from "../../components/Medias";
import { getTrendingTV } from "../../api/getTVShows/getTVShows";

const TrendingTVs = () => {
  return (
    <>
      <Medias getMedias={getTrendingTV} />
    </>
  );
};

export default TrendingTVs;