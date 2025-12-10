import { Grid, Box, Button } from "@mui/material";
import Card from "./MovieCard/Card";
import { useState, useEffect } from "react";
import type { Media } from "../types/moive";

export default function Medias({ getMedias } : { getMedias: (page: number)=> Promise<{ results: Media[] }> }) {
  const [medias, setMedias] = useState<Media[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getMedias(1).then((data) => {
      setMedias(data.results);})
  }, []);

  const loadMovie = async (pageNumber: number) => {
    const data = await getMedias(pageNumber);
    setMedias((prev) => [...prev, ...data.results])
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
          medias.map((media) => (
            <Grid key={media.id} size={{ sm: 12, xs: 12, md: 6, lg: 3 }}>
              <Card {...media}></Card>
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
