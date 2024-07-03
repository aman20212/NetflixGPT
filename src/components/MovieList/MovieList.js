import React from 'react'
import MovieCard from '../MovieCard/MovieCard'

const MovieList = ({ title, movies }) => {
    console.log(movies);
    return (
        <div className='px-6 bg-transparent '>
            <h1 className='text-2xl py-4 font-bold text-white'>{title}</h1>
            <div className='flex overflow-x-scroll '>
                <div className='flex'>
                    {movies?.map(movie => {
                        return (
                            <MovieCard posterPath={movie?.poster_path} key={movie?.id} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default MovieList