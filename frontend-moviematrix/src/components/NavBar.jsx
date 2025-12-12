import {Link} from "react-router-dom"
import "../stylesheet/navbar.css"
import Logo from "../assets/MOVIE_MATRIX.png"
import Profile from "../assets/profilepic.png"

function NavBar() {
    return <div className="nav-bar">
        <div className="home-logo">
            <Link to="/" className="logo">
                <img src={Logo} alt="Logo" width="160"/>
            </Link>
        </div>
        <div className="nav-pages">
            <Link to="/" className="nav-home">Home</Link>
            <Link to="/Movies" className="nav-movies">Movies</Link>
            <Link to="/Series" className="nav-series">Series</Link>
        </div>
        <div className="profile">
            <p className="profile-name">Pridhu</p>
            <div className="profile-picture">
                <img src={Profile} alt="profile-pic" />
            </div>
        </div>
    </div>
}

export default NavBar