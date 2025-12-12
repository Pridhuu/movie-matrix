import {Link} from "react-router-dom"
import "../stylesheet/homenavbar.css"
import Profile from "../assets/profilepic.png"

function HomeNav() {
    return <div className="home-nav-bar">
        <div className="home-nav-pages">
            <Link to="/" className="hero-nav-home">Home</Link>
            <Link to="/Movies" className="hero-nav-movies">Movies</Link>
            <Link to="/Favorites" className="hero-nav-favorites">Favorites</Link>
        </div>
        <div className="home-profile">
            <p className="hero-profile-name">Pridhu</p>
            <div className="profile-picture">
                <img src={Profile} alt="profile-pic" />
            </div>
        </div>
    </div>
}

export default HomeNav