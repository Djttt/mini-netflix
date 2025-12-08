import Movies from "../components/Movies";
import { getNowPlayingMovies } from "../api/getMovies/getMovies"


const NowPlaying = () => {
    
    return (
        <>
            <Movies getMovies={getNowPlayingMovies}/>
        </>
    )
}

export default NowPlaying;