import Medias from "../../components/Medias";
import { getTopRatedTV } from "../../api/getTVShows/getTVShows";

const TopRatedTV = () => {
  return (
    <>
      <Medias getMedias={getTopRatedTV} />
    </>
  );
};

export default TopRatedTV;
