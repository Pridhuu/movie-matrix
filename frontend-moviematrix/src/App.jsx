import "./stylesheet/app.css";
import Movies from "./pages/Movies";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"

function App() {
  return (
    <main className="whole-content">
      {/* <NavBar /> */}
      <div className="main-session">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/Favorites" element={<Favorites />} />
        </Routes>
      </div>
      <Footer />
    </main>
  );
}

export default App;