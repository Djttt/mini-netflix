import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import { type MovieDetail } from "../types/moive";
import { getMovieDetail } from "../api/getMovies/getMovieDetail";
import ActorList from "../components/ActocList";
import Media from "../components/Media";
import MovieInfoSidebar from "../components/MediaInfoSidebar";
import { Box } from "@mui/material";
import { getMovieCredits } from "../api/misc/movie/getMovieCredits";
import getMovieImages from "../api/misc/movie/getMovieImages";

export default function MoiveDetail() {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState<MovieDetail | null>(null);

  useEffect(() => {
    if (!id) return;
    getMovieDetail(parseInt(id)).then((data) =>
      setMovieDetail({ ...data, media_type: "movie" })
    );
  }, [id]);
  console.log("movieDetail:", movieDetail);

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
          {id && (
            <ActorList
              id={parseInt(id)}
              getCredits={getMovieCredits}
            ></ActorList>
          )}

          {id && <Media Id={parseInt(id)} getImages={getMovieImages} />}
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
