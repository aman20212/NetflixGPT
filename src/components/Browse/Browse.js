import Header from "../Header/Header";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import usePopularMovies from "../../hooks/usePopularMovies"
import MainContainer from "../MainContainer/MainContainer";
import SecondaryContainer from "../SecondaryContainer/SecondaryContainer";
import GPTSearch from "../GPTSearch/GPTSearch";
import { useSelector } from "react-redux";



const Browse = () => {
    const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
    useNowPlayingMovies();
    usePopularMovies();
    return (
        <div className="">
            <Header className="" />
            {showGPTSearch ? <GPTSearch /> : <>
                <MainContainer />
                <SecondaryContainer />
            </>}

        </div>
    )
}

export default Browse;