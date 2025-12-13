import "./stylesheet/app.css";
import Footer from "./components/Footer";
import { Outlet, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const hideFooter = location.pathname === "/";

  return (
    <main className="whole-content">
      <div className="main-session">
        <Outlet /> 
      </div>

      {!hideFooter && <Footer />}
    </main>
  );
}

export default App;
