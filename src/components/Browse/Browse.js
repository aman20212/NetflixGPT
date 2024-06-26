import Header from "../Header/Header";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import MainContainer from "../MainContainer/MainContainer";
import SecondaryContainer from "../SecondaryContainer/SecondaryContainer";



const Browse = () => {

    useNowPlayingMovies();

    return (
        <div>
            <Header className="" />
            <MainContainer />
            <SecondaryContainer />
            {
                /* 
                    Main Container
                        - Video Background
                        - Video Title
                    Secondary Container
                        - MovieList * n
                        - MovieCards * n
                */
            }
        </div>
    )
}

export default Browse;