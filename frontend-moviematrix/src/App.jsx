import "./stylesheet/app.css";
import Footer from "./components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";

function App() {
  const location = useLocation();
  const hideFooter = location.pathname === "/";

  return (
    <MovieProvider>
      <main className="whole-content">
        <div className="main-session">
          <Outlet /> 
        </div>

        {!hideFooter && <Footer />}
      </main>
    </MovieProvider>
  );
}

export default App;
