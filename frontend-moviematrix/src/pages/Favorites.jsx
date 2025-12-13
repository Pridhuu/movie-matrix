import MovieCard from "../components/MovieCard"
import "../stylesheet/favoritespage.css"
import NavBar from "../components/NavBar";
import {useState} from "react";
import searchIcon from "../assets/search.svg"
import { useMovieContext } from "../contexts/MovieContext";

function Favorites() {

    const { favorites } = useMovieContext();

    const [searchQuery, setSearchQuery] = useState("");
    
    function onHandle(e) {
        e.preventDefault()
        alert(searchQuery);
    }

    <form onSubmit={onHandle} className="search-form">
        <input type="text" placeholder="Find your film." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
        <button type="submit" className="search-button">
            <img src={searchIcon} alt="Search" height="18" className="search-svg"/>
        </button>
    </form>

    if(favorites) {
        return <main className="whole-fav">
            <NavBar />
            <div className="movies-page">
                <div className="movie-grids">
                    <div className="movie-grid-outer">
                        <div className="grid-header">
                            <h4 className="heading">Favorites</h4>
                            <div className="line"></div>
                        </div>
                        <div className="movie-grid">
                            {favorites.map((item) => item.title.toLowerCase().startsWith(searchQuery) && (<MovieCard movie={item} key={item.id}/>))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    }
}

export default Favorites