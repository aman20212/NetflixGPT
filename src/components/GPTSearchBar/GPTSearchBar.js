import React from 'react'
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import lang from "../../utils/languageConstants";
import genAI from '../../utils/gemini';
import { API_OPTIONS } from '../../utils/constants';
import { addGeminiMovieResult } from '../../utils/gptSlice';


const GPTSearchBar = () => {
    const langKey = useSelector((store) => store.config.lang);
    const searchText = useRef(null);
    const dispatch = useDispatch();
    const fetchMoviesTMDB = async (movieName) => {
        const data = await fetch(
            `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=hi&page=1`,
            API_OPTIONS
        );
        const json = await data.json();
        return json.results;
    }

    const handleGeminiAISearchClick = async () => {
        // make an API call to Gemini API and get movies results
        const geminiQuery = "Suggest 5 popular movies based on the following query: " + searchText?.current?.value + ". Please list them separated by commas and dont append ** before and after movie names.";
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(geminiQuery);
        const movieResponseList = result?.response?.text().split(',');
        if (movieResponseList?.length > 0) {
            const promiseArray = movieResponseList.map(movie => fetchMoviesTMDB(movie.trim()));
            const movieResults = await Promise.all(promiseArray);
            dispatch(addGeminiMovieResult({ movieNames: movieResponseList, movieResults: movieResults }))
        }
    }



    return (
        <div className='pt-[10%] flex justify-center'>
            <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(event) => event.preventDefault()}>
                <input type='text' ref={searchText} className='p-2 m-4 col-span-9 rounded-sm' placeholder={lang[langKey].gptSearchPlaceholder} />
                <button className='p-2 bg-red-600 text-white rounded-lg col-span-3 m-4' onClick={handleGeminiAISearchClick}>{lang[langKey].search}</button>
            </form>
        </div>
    )
}

export default GPTSearchBar