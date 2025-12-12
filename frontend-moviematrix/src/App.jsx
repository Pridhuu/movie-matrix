import "./stylesheet/app.css";
import Movies from "./pages/Movies";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <main className="whole-content">
      <NavBar />
      <div className="main-session">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Movies" element={<Movies />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;