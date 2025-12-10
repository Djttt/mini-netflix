import { Box, Typography } from "@mui/material"
import type { MovieDetail, TVDetail } from "../../types/moive"
import { IMAGE_BASE_URL_HD, IMAGE_BASE_URL_SMALL } from "../../constants/tmdbURL"
import UserScore from "./UserScore"
import { Link } from "react-router"
import MediaCreditsInfo from "./MediaCreditsInfo"
import { getMovieCredits } from "../../api/misc/movie/getMovieCredits";
import { getTVCredits } from "../../api/misc/tv/getTVCredits";

export default function Banner(props: MovieDetail | TVDetail) {

    console.log(IMAGE_BASE_URL_HD + props.backdrop_path)
    
    return (
        <>
            <Box 
                sx={{
                        display: "flex",
                        position: 'relative',
                        width: '100vw',
                        left: '50%',
                        right: '50%',
                        marginLeft: '-50vw',
                        marginRight: '-50vw',
                        backgroundColor: '#1a1a1a',
                        color: 'black',
                        height: 550,
                        overflow: 'hidden',
                    }}
            >

                <Box
                    sx={{   
                            position: 'relative', 
                            zIndex: 2,
                            p: 3,
                            width: '35%',
                            backgroundColor: 'rgba(29, 29, 29)',
                        }}
                >   
                </Box>

                <Box
                    sx={{
                        width: '65%',
                        backgroundImage: `linear-gradient(
                                                to left, 
                                                rgba(29, 29, 29, 0.4) 0%,        /* 右侧：完全透明 (或者 0.1 稍微暗一点) */
                                                rgba(29, 29, 29, 0.7) 50%,     /* 中间：半透明过渡 */
                                                rgba(29, 29, 29, 1) 100%       /* 左侧：纯灰色，遮盖住图片边缘 */
                                            ),
                                            url(${IMAGE_BASE_URL_HD + props.backdrop_path})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'top',
                        backgroundRepeat: 'no-repeat',
                        minHeight: { xs: 300, md: 500 },
                    }}
                >
                </Box>
                
                
                <Box
                    sx={{
                        position: 'absolute',
                        display: 'flex',
                        zIndex: 10,
                        left: '15%',
                        top: '5%',
                        width: '80%',
                        height: '100%',
                        gap: 4,
                    }}
                >
                    <Box 
                        component='div'
                        sx={{ flexShrink: 0 }} // 防止图片被压缩
                    >
                        <img 
                            alt={props.media_type === 'movie' ? props.title : props.name}
                            src={IMAGE_BASE_URL_SMALL + props.poster_path}
                            style={{
                                borderRadius: '6px',
                                boxShadow: '0px 4px 20px rgba(0,0,0,0.5)', 
                                height: '90%',
                            }}
                        ></img>
                    </Box>

                    <Box 
                        component='div'
                        sx={{
                            color: 'white',
                            padding: 4,
                            textAlign: 'left',
                        }}
                    >
                        <Title {...props}></Title>
                        
                        <Score voteAverage={props.vote_average}></Score>
                        
                        <Typography variant="body2" sx={{ color: "grey", paddingTop: 2, fontStyle: "italic", fontSize: "1.1rem"}}>{props.tagline}</Typography>
                        
                        {/* overview */}
                        <Box component='div' sx={{ paddingTop: 2}}>
                            <Typography variant="h5">简介</Typography>
                            <Typography 
                                variant="body2"
                                component='p' 
                                sx={{ 
                                    fontSize: "1rem", 
                                    marginTop: 1.5, 
                                    width: "84%", 
                                    color: "rgba(255,255,255,0.7)"
                                }}
                            >
                                    {
                                        props.overview.length > 180 ? props.overview.slice(0, 180) + "......"
                                                                    : props.overview
                                    }
                            </Typography>    
                        </Box>

                        {/* 电影制片信息 */}
                        <MediaCreditsInfo id={props.id} getCredits={props.media_type === 'movie' ?
                            getMovieCredits : getTVCredits
                        }/>
                    </Box>
                </Box>

            </Box>
        </>
    )
}


function Title(props: MovieDetail | TVDetail) {
    let year: string | undefined;
    if (props.media_type === "movie") {
        year = props.release_date.split('-')[0];
    } else {
        year = props.first_air_date?.split('-')[0];
    }
    function formatRuntime(minutes: number) {
        const h = Math.floor(minutes / 60);
        const m = minutes % 60;
        return `${h}h ${m}m`;
    }

    console.log("hi", props.media_type);

    return (
        <>
            <Box
                component='div'
            >   
                {/* 电影title */}
                <Link
                    to={`/movie/${props.id}`}
                    >
                        <Typography 
                            variant="h4"
                        >
                            <Typography
                                component="span"
                                sx={{
                                    fontSize: "2.3rem",
                                    ":hover": {
                                        color: "gray",
                                    }
                                }}
                            >
                                {props.media_type === 'movie' ? props.title : props.name}{" "}
                            </Typography>
                            <Typography
                                component="span"
                                sx={{
                                    fontSize: "2.3rem", opacity: 0.8 }}
                            >
                                ({year})
                            </Typography>
                        </Typography>
                </Link>
                
                {/* 附加信息 */}
                <Box
                    component="div"
                    sx={{
                        
                    }}
                >   
                    {/* 电影时间表  */}
                    <Typography
                        component='span'
                    >
                        {props.media_type === 'movie' ? props.release_date : props.first_air_date}({props.production_countries[0].iso_3166_1})----
                    </Typography>

                    {/* 电影分类 */}
                    {props.genres.map((genre, index) => {
                        if (index == props.genres.length - 1) {
                            return <Typography key={genre.id} component="span">{genre.name}----</Typography>
                        } else {
                            return <Typography key={genre.id} component="span">{genre.name},</Typography>
                        }
                    })}

                    {/* 影片长度 */}
                    <Typography component='span'>   
                        {props.runtime && formatRuntime(props.runtime)}
                    </Typography>
                </Box>

            </Box>
        </>
    )
}

function Score({voteAverage}: {voteAverage: number}) {
    
    return (
        <>
            <Box sx={{ paddingTop: 3,
                display: 'flex',
                alignItems: 'center',
                gap: 2
            }}>
                <UserScore score={Math.floor(voteAverage * 10)}/>
                <Typography component='div'>用户评分</Typography>
            </Box>
        </>
    )
}