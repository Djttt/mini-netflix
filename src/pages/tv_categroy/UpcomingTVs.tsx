import Medias from "../../components/Medias";
import { getAiringTodayTV } from "../../api/getTVShows/getTVShows";

const UpcomingTV = () => {
  return (
    <>
      <Medias getMedias={getAiringTodayTV} />
    </>
  );
};

export default UpcomingTV;
