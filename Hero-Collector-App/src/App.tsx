import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Header from "./components/globals/Header";
import Footer from "./components/globals/Footer";
import Collection from "./pages/Collection";
import Game from "./pages/Game";
import GameItems from "./pages/GameItems";

import { useAuthStore } from "./storage/authStore";
import { useEffect } from "react";
import { api } from "../api/axios";
import type { LoggedUserResponse } from "./types/storageTypes";

function App() {
  const setAuth = useAuthStore((s) => s.setAuth);
  const clearAuth = useAuthStore((s) => s.clearAuth);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await api<LoggedUserResponse>("get", "/loggedUser");
        setAuth(res.user);
      } catch {
        clearAuth();
      }
    };
    checkAuth();
  }, [setAuth, clearAuth]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/game" element={<Game />} />
          <Route path="/gameitems" element={<GameItems />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
