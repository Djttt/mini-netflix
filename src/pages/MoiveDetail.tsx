import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import { type MovieDetail } from "../types/moive";
import { getMovieDetail } from "../api/getMovies/getMovieDetail";
import MovieActorList from "../components/MovieActocList";
import MovieMedia from "../components/MovieMedia";
import MovieInfoSidebar from "../components/MovieInfoSidebar";
import { Box } from "@mui/material";

export default function MoiveDetail() {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState<MovieDetail | null>(null);

  useEffect(() => {
    if (!id) return;
    getMovieDetail(parseInt(id)).then((data) => setMovieDetail(data));
  }, [id]);

  return (
    <>
      {movieDetail && <Banner {...movieDetail}></Banner>}
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
          {id && movieDetail && (
            <MovieInfoSidebar
              movieId={parseInt(id)}
              movieDetail={movieDetail}
            ></MovieInfoSidebar>
          )}
        </Box>
      </Box>

      <p>Movie ID is: {id}</p>
    </>
  );
}
