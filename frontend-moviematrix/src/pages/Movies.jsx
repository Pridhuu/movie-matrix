import MovieCard from "../components/MovieCard"
import {useState} from "react";
import "../stylesheet/moviespage.css"
import searchIcon from "../assets/search.svg"
import NavBar from "../components/NavBar";

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

    return <main className="whole">
        <NavBar />
        <div className="movies-page">
            <form onSubmit={onHandle} className="search-form">
                <input type="text" placeholder="Find your film." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                <button type="submit" className="search-button">
                    <img src={searchIcon} alt="Search" height="18" className="search-svg"/>
                </button>
            </form>
            <div className="movie-grids">
                <div className="movie-grid-outer">
                    <div className="grid-header">
                        <h4 className="heading">Trending</h4>
                        <div className="line"></div>
                    </div>
                    <div className="movie-grid">
                        {movies.map((item) => item.title.toLowerCase().startsWith(searchQuery) && (<MovieCard movie={item} key={item.id}/>))}
                    </div>
                </div>
                <div className="movie-grid-outer">
                    <div className="grid-header">
                        <h4 className="heading">Latest</h4>
                        <div className="line"></div>
                    </div>
                    <div className="movie-grid">
                        {movies.map((item) => item.title.toLowerCase().startsWith(searchQuery) && (<MovieCard movie={item} key={item.id}/>))}
                    </div>
                </div>
            </div>
        </div>
    </main>
}

export default Movies