import Movies from "../components/Movies";
import { getUpcomingMovies } from "../api/getMovies/getMovies"


const Upcoming = () => {
    
    return (
        <>
            <Movies getMovies={getUpcomingMovies}/>
        </>
    )
}

export default Upcoming;