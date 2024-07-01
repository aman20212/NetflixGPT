import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from '../VideoTitle/VideoTitle';
import VideoBackground from '../VideoBackground.js/VideoBackground';

const MainContainer = () => {
    const movies = useSelector(store => store?.movies?.nowPlayingMovies);

    // also known as early return
    if (!movies) {
        return;
    }
    const mainMovie = movies[0];
    const { original_title, overview, id } = mainMovie;
    return (
        <div>
            <VideoTitle title={original_title} description={overview} />
            <VideoBackground movieID={id} />
        </div>
    )
}

export default MainContainer; 