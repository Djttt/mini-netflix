import { Grid } from "@mui/material";
import MovieCard from "../components/MovieCard/MovieCard";
import { getTrendingMovies } from "../api/getTrendingMovies";
import { useState, useEffect } from "react";
import type { MovieTrending } from "../types/moive";

export default function Home() {
  const [movies, setMovies] = useState<MovieTrending[]>([]);
  useEffect(() => {
    getTrendingMovies().then((data) => {
      setMovies(data.results);
    });
  }, []);

  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          justifyItems: "center",
          width: "100%",
        }}
      >
        {movies.map((movie) => (
          <Grid key={movie.id} size={{ sm: 12, xs: 12, md: 6, lg: 3 }}>
            <MovieCard {...movie}></MovieCard>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
