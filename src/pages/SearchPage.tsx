import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchTMDB } from "../api/searchTMDB";
import { type Media } from "../types/moive";
import { Grid, Box, Button } from "@mui/material"
import MediaCard from "../components/MovieCard/Card";

export default function SearchPage() {
    const [params] = useSearchParams();
    const query = params.get("q") || "";
    const [medias, setMedias] = useState< Media[] >([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        searchTMDB(1, query).then(data => setMedias(data));
    }, [query]);


    const loadMedia = async (pageNumber: number) => {
        const data = await searchTMDB(pageNumber, query);
        setMedias((prev) => [...prev, ...data]);
    };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    loadMedia(nextPage);
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
            medias && medias.map((media) => (
                <Grid key={media.id} size={{ sm: 12, xs: 12, md: 6, lg: 3 }}>
                <MediaCard {...media}></MediaCard>
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