import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Header from "./components/globals/Header";
import Footer from "./components/globals/Footer";
import Collection from "./pages/Collection";
import Game from "./pages/Game";
import GameItems from "./pages/GameItems";
import Users from "./pages/Users";

import { useEffect } from "react";
import { useAuthStore } from "./storage/authStore";
import { useAdminToggle } from "./storage/adminToggleStore";
import type { LoggedUserResponse } from "./types/storageTypes";
import { api } from "../api/axios";

function App() {
  const setAuth = useAuthStore((s) => s.setAuth);
  const clearAuth = useAuthStore((s) => s.clearAuth);
  const setAdmin = useAdminToggle((s) => s.setIsAdmin);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await api<LoggedUserResponse>("get", "/loggedUser");
        if (res.user.roles?.includes("admin")) {
          setAdmin(true);
        }
        setAuth(res.user);
      } catch {
        clearAuth();
      }
    };
    checkAuth();
  }, [setAuth, clearAuth, setAdmin]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/collection/:auth0Id" element={<Collection />} />
          <Route path="/game" element={<Game />} />
          <Route path="/gameitems" element={<GameItems />} />
          <Route path="/users" element={<Users />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
