import MovieCard from "../components/MovieCard"
import {useState} from "react";
import "../stylesheet/moviespage.css"
import searchIcon from "../assets/search.svg"

function Movies() {

    const movies = [
        {id: 1, title: "Terminator"},
        {id: 2, title: "Aquaman"},
        {id: 3, title: "Black Panther"},
        {id: 4, title: "Ironman"},
        {id: 5, title: "Avengers"},
        {id: 6, title: "Yozuki"},
    ];

    const [searchQuery, setSearchQuery] = useState("");

    function onHandle(e) {
        e.preventDefault()
        alert(searchQuery);
    }

    return <div className="movies-page">
        <form onSubmit={onHandle} className="search-form">
            <input type="text" placeholder="Find your film." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
            <button type="submit" className="search-button">
                <img src={searchIcon} alt="Search" height="18"/>
            </button>
        </form>
        <div className="movie-grid">
            {movies.map((item) => item.title.toLowerCase().startsWith(searchQuery) && (<MovieCard movie={item} key={item.id}/>))}
        </div>
    </div>
}

export default Movies