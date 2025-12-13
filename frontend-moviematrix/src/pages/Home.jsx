import HomeNav from "../components/HomeNav"
import "../stylesheet/homepage.css"
import arrow from "../assets/arrow.svg"
import { useNavigate } from "react-router-dom"

function Home() {

    const navigate = useNavigate();

    return <div className="home-page">
        <HomeNav />
        <div className="bg-content">
            <div className="img-background"></div>
            <div className="content">
                <div className="text-content">
                    <p className="p1">Passionate about</p>
                    <p className="p2">Creativity</p>
                    <p className="p1">Discover masterpieces here.</p>
                </div>
                <button className="toMovies" onClick={() => navigate("/Movies")}>Explore
                    <img src={arrow} alt="arrow-icon" className="arrow-svg" height="20" />
                </button>
            </div>
        </div>
    </div>
}

export default Home 