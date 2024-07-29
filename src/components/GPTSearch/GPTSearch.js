import React from 'react'
import GPTSearchBar from '../GPTSearchBar/GPTSearchBar'
import GPTMovieSuggestions from '../GPTMovieSuggestions/GPTMovieSuggestions'

import { NETFLIX_BG_IMAGE_URL } from "../../utils/constants"

const GPTSearch = () => {
    return (
        <div>
            <div className="fixed w-full -z-10">
                <img src={NETFLIX_BG_IMAGE_URL} alt="banner-img" className="h-screen w-full" />
            </div>
            <GPTSearchBar />
            <GPTMovieSuggestions />
        </div>
    )
}

export default GPTSearch