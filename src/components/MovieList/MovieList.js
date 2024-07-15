import React, { useRef } from 'react'
import MovieCard from '../MovieCard/MovieCard'

const MovieList = ({ title, movies }) => {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        console.log('Right::', scrollRef);
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };


    return (
        <div className='px-6 bg-transparent '>
            <h1 className='text-2xl py-4 font-bold text-white'>{title}</h1>
            <div className='flex w-full flex-row items-center'>
                <button
                    className="absolute left-0 z-10 p-0 ml-2 bg-gray-800 text-white rounded-full hover:bg-gray-600 focus:outline-none h-8 w-8 text-[20px]"
                    onClick={scrollLeft}
                >
                    ‹
                </button>

                <div className='flex overflow-x-auto scroll-smooth relative scrollbar-hide' ref={scrollRef}>
                    <div className='flex items-center' >
                        {movies?.map(movie => {
                            return (
                                <MovieCard posterPath={movie?.poster_path} key={movie?.id} />
                            )
                        })}
                    </div>
                </div>
                <button
                    className="absolute right-0 z-10 p-0 mr-2 bg-gray-800 text-white rounded-full hover:bg-gray-600 focus:outline-none h-8 w-8 text-[20px]"
                    onClick={scrollRight}
                >
                    ›
                </button>
            </div>
        </div>
    )
}

export default MovieList