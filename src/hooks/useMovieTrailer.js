import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";


const useMovieTrailer = (movieID) => {
    const dispatch = useDispatch();
    useEffect(() => {
        getMovieVideo();
    }, [])

    const getMovieVideo = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`, API_OPTIONS);
        const json = await data.json();

        const trailerVideos = json?.results?.filter((video) => video?.type === 'Trailer');
        const trailer = trailerVideos?.length ? trailerVideos[0] : json?.results[0];
        dispatch(addTrailerVideo(trailer));
    }
}

export default useMovieTrailer;