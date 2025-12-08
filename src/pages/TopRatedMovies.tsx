import Movies from "../components/Movies";
import { getTopRatedMovies } from "../api/getMovies/getMovies"


const TopRated = () => {
    
    return (
        <>
            <Movies getMovies={getTopRatedMovies}/>
        </>
    )
}

export default TopRated;