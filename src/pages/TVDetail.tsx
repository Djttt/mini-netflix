import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import { type TVDetail } from "../types/moive";
import { getMovieDetail } from "../api/getMovies/getMovieDetail";
import MovieActorList from "../components/MovieActocList";
import MovieMedia from "../components/MovieMedia";
import MovieInfoSidebar from "../components/MovieInfoSidebar";
import { Box } from "@mui/material";

export default function TVDetail() {
  const { id } = useParams();
  const [tvDetail, setTVDetail] = useState<TVDetail | null>(null);

  useEffect(() => {
    if (!id) return;
    getMovieDetail(parseInt(id)).then((data) => setTVDetail(data));
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
          {id && <MovieActorList id={parseInt(id)}></MovieActorList>}

          {id && <MovieMedia movieId={parseInt(id)} />}
        </Box>
        <Box
          sx={{
            width: "25%",
            marginLeft: 8,
          }}
        >
          {id && tvDetail && (
            <MovieInfoSidebar
              movieId={parseInt(id)}
              movieDetail={tvDetail}
            ></MovieInfoSidebar>
          )}
        </Box>
      </Box>

      <p>Movie ID is: {id}</p>
    </>
  );
}
