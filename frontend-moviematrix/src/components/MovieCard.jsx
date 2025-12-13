import "../stylesheet/moviecard.css"
import arrow from "../assets/arrow.svg"
import { useMovieContext } from "../contexts/MovieContext"

function MovieCard({movie}) {

    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
    const favorite = isFavorite(movie.id)

    function FavoriteButton(e) {
        e.preventDefault()
        if (favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="poster" />
            <button className={`favorite-button ${favorite ? "active" : ""}`} onClick={FavoriteButton}>♥</button>
        </div>
        <div className="movie-info">
            <div className="right-info">
                <div className="title-date">
                    <p className="movie-title">{movie.title}</p>
                    <div className="movie-date">{movie.release_date?.split("-")[0]}</div>
                </div>
                <div className="movie-rating">★★★★★</div>
            </div>
            <div className="watch-text">
                <div className="watch-button">Watch Now</div>
                <img src={arrow} height="16"/>
            </div>
        </div>
    </div>
}

export default MovieCard