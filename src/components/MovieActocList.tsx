import type { CreditsInfo } from "../types/moive";
import { useState, useEffect } from "react";
import { getMovieCredits } from "../api/getMovieCredits";
import { Box, Typography, Card, CardMedia, CardContent, styled } from "@mui/material";
import type { Actor } from "../types/moive";
import { Link } from "react-router-dom";
import { IMAGE_BASE_URL_SMALL } from "../constants/tmdbURL";

const MovieActorList = ({ id }: { id: number }) => {
    const displayNum = 9
    const [creditsInfo, setCreditsInfo] = useState<CreditsInfo | null>(null);
    const displayPerson = creditsInfo?.cast && creditsInfo.cast.length > displayNum ? creditsInfo.cast.slice(0, displayNum) : creditsInfo?.cast
    

    useEffect(() => {
        getMovieCredits(id).then((data) => {
        setCreditsInfo(data);
        });
    }, [id]);

    if (!creditsInfo || !creditsInfo.cast || creditsInfo.cast.length === 0) {
        return null; // 或者返回 Loading...
    }

    return (
        <Box sx={{ 
            mt: 3, 
            mb: 3, 
        }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'left'}}>演员阵容</Typography>
            
            {/* 滚动区域 */}
            <ScrollContainer>
                { displayPerson &&  displayPerson.map((actor) => (
                    <ActorCard key={actor.id} actor={actor} />
                ))}
                { displayPerson && <ActorCard actor={undefined}></ActorCard>}
            </ScrollContainer>
            
            <Link
                to={`/movie/${id}/cast`}
            >
                <Typography
                    sx={{
                        textAlign: 'left',
                        paddingTop: 2,
                        ":hover": {
                            color: 'gray',
                        }
                    }}
                >
                    完整演职员表
                </Typography>
            </Link>
        </Box>
    )
}


const ActorCard = ({actor}: {actor: Actor | undefined}) => {

    return (
        <>
        {  actor && 
            <Card
                sx={{
                    minWidth: 140,    
                    maxWidth: 160,     
                    flexShrink: 0,     
                    boxShadow: 'none', 
                    bgcolor: 'transparent',
                    borderRadius: '10px',
                    border: '1px solid #e0e0e0', 
                    textAlign: 'left'
                }}  
            >   
                <Link
                    to={`/person/${actor.id}`}
                >
                    <CardMedia 
                        component='img'
                        alt={`${actor.name}`}
                        image={`${IMAGE_BASE_URL_SMALL}${actor.profile_path}`}
                        sx={{
                            borderRadius: '5px',
                            objectFit: 'cover',
                            aspectRatio: '2.9 / 4',
                            width: '100%',
                        }}
                    />
                    <CardContent sx={{ mt: 1, padding: 0, paddingLeft: 2, marginBottom: 0 }}>
                        <Typography variant="h6" component='h6'
                            sx={{
                                fontSize: '1rem',
                                fontWeight: "bold",
                                overflow: 'hidden',
                                color: 'inherit',
                                ":hover": {
                                    color: 'gray'
                                }
                            }}
                        >
                            {actor.name}
                        </Typography>
                    </CardContent>
                </Link>

                <CardContent sx={{ padding: 0, paddingLeft: 2 }}>
                    <Typography color="text.secondary" sx={{ fontSize: '0.9rem' }}>
                            {actor.character}
                    </Typography>
                </CardContent>
            </Card>
        }

        {
            !actor && (
                <Card
                    sx={{
                        minWidth: 140,    
                        maxWidth: 160,       
                        boxShadow: 'none', 
                        bgcolor: 'transparent',
                        borderRadius: '10px',
                        textAlign: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        justifyItems: 'center',
                }}  
                >  
                    <CardContent>
                        <Link
                            to={`/movie/movieId/cast`}
                        >
                            <Typography sx={{ fontWeight: 'bold', ":hover": { color: 'gray' }}}>
                                查看更多 ➡️
                            </Typography>
                        </Link>
            
                    </CardContent>
                </Card> 
            )
        }
        </>
    )
}


// 原生滚动条的容器
const ScrollContainer = styled(Box)({
    display: 'flex',
    overflowX: 'auto',
    gap: '8px', 
    paddingBottom: '10px',
});


export default MovieActorList;