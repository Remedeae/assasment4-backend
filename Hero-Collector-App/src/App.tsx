import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Header from "./components/globals/Header";
import Footer from "./components/globals/Footer";
import Collection from "./pages/Collection";
import Game from "./pages/Game";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/game" element={<Game />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
