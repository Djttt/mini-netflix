import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import { type TVDetail } from "../types/moive";
import { getTVDetail } from "../api/getTVShows/getTVDetail";
import ActorList from "../components/ActocList";
import Media from "../components/Media";
import TVInfoSidebar from "../components/TVInfoSidebar";
import { Box } from "@mui/material";
import { getTVCredits } from "../api/misc/tv/getTVCredits";
import getTVImages from "../api/misc/tv/getTVImages";

export default function TVDetail() {
  const { id } = useParams();
  const [tvDetail, setTVDetail] = useState<TVDetail | null>(null);

  useEffect(() => {
    if (!id) return;
    getTVDetail(parseInt(id)).then((data) =>
      setTVDetail({ ...data, media_type: "tv" })
    );
  }, [id]);

  return (
    <>
      {tvDetail && <Banner {...tvDetail}></Banner>}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: "75%",
          }}
        >
          {id && (
            <ActorList id={parseInt(id)} getCredits={getTVCredits}></ActorList>
          )}

          {id && <Media Id={parseInt(id)} getImages={getTVImages} />}
        </Box>
        <Box
          sx={{
            width: "25%",
            marginLeft: 8,
          }}
        >
          {id && tvDetail && (
            <TVInfoSidebar
              Id={parseInt(id)}
              detail={tvDetail}
            ></TVInfoSidebar>
          )}
        </Box>
      </Box>

      <p>TV ID is: {id}</p>
    </>
  );
}
