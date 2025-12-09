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
            <h3 className="movie-title">{movie.title}</h3>
            <div className="movie-rating">★★★★★</div>
            <div className="watch-text">
                <div className="watch-button">Watch Now</div>
                <img src="C:\Users\hpp\Desktop\Programming\GitRepository\movie-matrix\frontend-moviematrix\src\assets\arrow.png"/>
            </div>
        </div>
    </div>
}

export default MovieCard