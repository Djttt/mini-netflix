import Medias from "../../components/Medias";
import { getAiringTodayTV } from "../../api/getTVShows/getTVShows";

const AiringTodayTVs = () => {
  return (
    <>
      <Medias getMedias={getAiringTodayTV} />
    </>
  );
};

export default AiringTodayTVs;
