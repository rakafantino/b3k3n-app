import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Favorite from "./pages/Favorite.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />;
      <Route path="/favorite" element={<Favorite />} />;
    </Routes>
  );
}

export default App;
