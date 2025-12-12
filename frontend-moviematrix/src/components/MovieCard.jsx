import "../stylesheet/moviecard.css"
import arrow from "../assets/arrow.svg"

function MovieCard({movie}) {

    function FavoriteButton() {
        alert("Clicked")
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.url} alt={movie.title} />
            <div className="movie-overlay">
                <button className="favorite-button" onClick={FavoriteButton}>♥</button>
            </div>
        </div>
        <div className="movie-info">
            <div className="right-info">
                <div className="title-date">
                    <p className="movie-title">{movie.title}</p>
                    <div className="movie-date">2022</div>
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