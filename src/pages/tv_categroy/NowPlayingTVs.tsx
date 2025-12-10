import Medias from "../../components/Medias";
import { getNowPlayingTV } from "../../api/getTVShows/getTVShows";

const NowPlayingTV = () => {
  return (
    <>
      <Medias getMedias={getNowPlayingTV} />
    </>
  );
};

export default NowPlayingTV;
