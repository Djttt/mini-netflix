import Medias from "../components/Medias";
import { getTrendingMovies } from "../api/getTrendingMovies";

const Home = () => {
  return (
    <>
      <Medias getMedias={getTrendingMovies} />
    </>
  );
};

export default Home;
