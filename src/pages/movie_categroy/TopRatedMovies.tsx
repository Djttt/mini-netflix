import Medias from "../../components/Medias";
import { getTopRatedMovies } from "../../api/getMovies/getMovies";

const TopRated = () => {
  return (
    <>
      <Medias getMedias={getTopRatedMovies} />
    </>
  );
};

export default TopRated;
