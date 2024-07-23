import React from 'react'
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import lang from "../../utils/languageConstants";


const GPTSearchBar = () => {
    const dispatch = useDispatch();
    const langKey = useSelector((store) => store.config.lang);
    const searchText = useRef(null);

    return (
        <div className='pt-[10%] flex justify-center'>
            <form className='w-1/2 bg-black grid grid-cols-12'>
                <input type='text' className='p-2 m-4 col-span-9 rounded-sm' placeholder={lang[langKey].gptSearchPlaceholder} />
                <button className='p-2 bg-red-600 text-white rounded-lg col-span-3 m-4'>{lang[langKey].search}</button>
            </form>
        </div>
    )
}

export default GPTSearchBar