import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import HeaderHome from "./components/HeaderHome/HeaderHome";
import Home from "./pages/Home/Home";
import Underconstruction from "./pages/Underconstruction/Underconstruction";
import Footer from "./components/Footer/Footer";
import Phone from "./pages/Phone/Phone";
function App() {
  return (
    <BrowserRouter>
      <HeaderHome />
      <Routes>
        <Route exact path={"/phones"} element={<Phone />} />
        <Route
          exact
          path={"/underconstruction"}
          element={<Underconstruction />}
        />
        <Route exact path={"/"} element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
