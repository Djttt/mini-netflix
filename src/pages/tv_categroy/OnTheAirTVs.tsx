import Medias from "../../components/Medias";
import { getOnTheAirTV } from "../../api/getTVShows/getTVShows";

const OnTheAirTVs = () => {
  return (
    <>
      <Medias getMedias={getOnTheAirTV} />
    </>
  );
};

export default OnTheAirTVs;
