import React from 'react'
import { useSelector } from 'react-redux'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import MovieList from "../MovieList/MovieList"

const GPTMovieSuggestions = () => {
    const gpt = useSelector(store => store.gpt);
    const { movieResults, movieNames } = gpt;
    if (!movieNames) {
        toast.error('No movies found !!!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
    }

    return (
        <>
            {!movieNames && <ToastContainer />}
            {movieNames !== null && <div className='p-4 bg-black mt-4 text-white bg-opacity-70 w-full'>
                <div>
                    {movieNames.map((movieName, index) => (
                        <MovieList
                            key={movieName}
                            title={movieName}
                            movies={movieResults[index]}
                        />
                    ))}
                </div>
            </div>}
        </>
    )
}

export default GPTMovieSuggestions