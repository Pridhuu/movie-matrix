import MovieCard from "../components/MovieCard"
import "../stylesheet/favoritespage.css"
import NavBar from "../components/NavBar";

function Favorites() {

    const movies = [
        {id: 1, title: "Terminator"},
        {id: 2, title: "Aquaman"},
        {id: 3, title: "Black Panther"},
        {id: 4, title: "Ironman"},
        {id: 5, title: "Avengers"},
        {id: 6, title: "Yozuki"},
    ];

    return <main className="whole">
        <NavBar />
        <div className="movie-grid-out">
            <div className="grid_header">
                <h4 className="headings">Favorites</h4>
                <div className="lines"></div>
            </div>
            <div className="movies-grid">
                {movies.map((item) => (<MovieCard movie={item} key={item.id}/>))}
            </div>
        </div>
    </main>
}

export default Favorites