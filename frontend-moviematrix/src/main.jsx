import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./stylesheet/index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Movies from "./pages/Movies.jsx";
import Favorites from "./pages/Favorites.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="Movies" element={<Movies />} />
          <Route path="Favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
