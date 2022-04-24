import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import Detail from "./components/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/detail/:id" element={<Detail />} />

        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
