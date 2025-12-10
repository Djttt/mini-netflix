import Medias from "../../components/Medias";
import { getNowPlayingMovies } from "../../api/getMovies/getMovies";

const NowPlaying = () => {
  return (
    <>
      <Medias getMedias={getNowPlayingMovies} />
    </>
  );
};

export default NowPlaying;
