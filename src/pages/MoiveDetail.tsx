import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../components/Banner/Banner';
import { type MovieDetail } from '../types/moive';
import { getMovieDetail } from '../api/getMovieDetail';

export default function MoiveDetail() {
    const { id } = useParams();
    const [movieDetail, setMovieDetail] = useState<MovieDetail | null>(null);

    useEffect(() => {
        if (!id) return;
        getMovieDetail(parseInt(id)).then(data => setMovieDetail(data));
    }, [id]);
    
    return (
        <>
            {
                movieDetail && <Banner {...movieDetail}></Banner>
            }
            

            <p>Movie ID is: {id}</p>
        </>
    )
}