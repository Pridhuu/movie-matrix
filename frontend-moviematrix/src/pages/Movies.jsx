import MovieCard from "../components/MovieCard"

function Movies() {

    const movies = [
        {id: 1, title: "Terminator"},
        {id: 2, title: "Aquaman"},
        {id: 3, title: "Black Panther"},
    ];

    return <div className="movies-page">
        <div className="Logo">
            <img src="C:\Users\hpp\Desktop\Programming\GitRepository\movie-matrix\frontend-moviematrix\src\assets\MOVIE MATRIX.png" alt="LOGO" />
        </div>
        <div className="nav-bar"></div>
        <div className="profile-section"></div>
        <form onSubmit={onHandle} className="search-form">
            <input type="text" placeholder="Find your film." className="search-input"/>
        </form>
        <div className="movie-grid">
            {movies.map((item) => (<MovieCard movie={item} key={item.id}/>))}
        </div>
    </div>
}

export default Movies