import Medias from "../../components/Medias";
import { getUpcomingMovies } from "../../api/getMovies/getMovies";

const Upcoming = () => {
  return (
    <>
      <Medias getMedias={getUpcomingMovies} />
    </>
  );
};

export default Upcoming;
