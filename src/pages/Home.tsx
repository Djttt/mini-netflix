import { Grid, Box, Button } from "@mui/material";
import MovieCard from "../components/MovieCard/MovieCard";
import { getTrendingMovies } from "../api/getTrendingMovies";
import { useState, useEffect } from "react";
import type { MovieTrending } from "../types/moive";

export default function Home() {
  const [movies, setMovies] = useState<MovieTrending[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getTrendingMovies().then((data) => {
      setMovies(data.results);})
  }, []);

  const loadMovie = async (pageNumber: number) => {
    const data = await getTrendingMovies(pageNumber);
    setMovies((prev) => [...prev, ...data.results])
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    loadMovie(nextPage);
  }

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
        {
          movies.map((movie) => (
            <Grid key={movie.id} size={{ sm: 12, xs: 12, md: 6, lg: 3 }}>
              <MovieCard {...movie}></MovieCard>
            </Grid>
          ))
        }
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 3}}>
        <Button variant="contained" onClick={handleLoadMore} sx={{ width: "95%" }}>加载更多</Button> 
      </Box>
    </>
  );
}
