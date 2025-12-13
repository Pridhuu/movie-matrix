import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react";
import "../stylesheet/moviespage.css"
import searchIcon from "../assets/search.svg"
import NavBar from "../components/NavBar";
import { getTrendingMovies, searchMovies } from "../services/api";

function Movies() {

    const [searchQuery, setSearchQuery] = useState("");
    const[movies, setMovies] = useState([]);
    const[error, setError] = useState(null);
    const[loading, setLoading] = useState(false);

    useEffect(() => {
        const loadTrendingMovies = async () => {
            try{
                const TrendingMovies = await getTrendingMovies();
                setMovies(TrendingMovies);
            } catch(e) {
                console.log(e);
                setError("Failed to load movies...");
            } finally {
                setLoading(false);
            }
        }

        loadTrendingMovies();

    }, []);


    async function onHandle(e) {
        if(!searchQuery.trim()) return;
        if(loading) return
        e.preventDefault()
        alert(searchQuery);
        setLoading(true);
        try {
            const searchResult = await searchMovies();
            setMovies(searchResult);
            setError(null);
        } catch(e) {
            console.log(e);
            setError("Error in searching...");
        } finally {
            setLoading(flase);
        }
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
            { loading ? (<div className="loading">Loading...</div>) : (<div className="movie-grids">
                <div className="movie-grid-outer">
                    <div className="grid-header">
                        <h4 className="heading">Trending</h4>
                        <div className="line"></div>
                    </div>
                    <div className="movie-grid">
                        {movies.map((item) => item.title.toLowerCase().startsWith(searchQuery) && (<MovieCard movie={item} key={item.id}/>))}
                    </div>
                </div>
            </div>)}
            { error && <div className="error-message">{error}</div> }
        </div>
    </main>
}

export default Movies