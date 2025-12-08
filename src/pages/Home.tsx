import Movies from "../components/Movies";
import { getTrendingMovies } from "../api/getTrendingMovies";


const Home = () => {
    
    return (
        <>
            <Movies getMovies={getTrendingMovies}/>
        </>
    )
}

export default Home;