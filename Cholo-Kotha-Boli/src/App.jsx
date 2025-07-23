import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import SettingsPage from "./pages/SettingsPage";
import './index.css';  // or whatever your CSS file is named

import { useAuthStore } from "./store/useAuthStore";
import ProfilePage from "./pages/ProfilePage.Jsx";
import { Loader } from "lucide-react";
import { Toaster } from "react-hot-toast";
import { useThemeStore } from "./store/useThemeStore";

const App = () => {
  const { authUser, checkAuth, isCheckingAuth,onlineUsers } = useAuthStore();
  const {theme} = useThemeStore();

  console.log("from online users",onlineUsers);
  
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log(authUser);

  if (isCheckingAuth && !authUser)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin"></Loader>
      </div>
    );

  return (
    <div data-theme = {theme} className="app-container">
      <Navbar></Navbar>

      <Routes>
        <Route
          path="/"
          element={
            authUser ? <HomePage></HomePage> : <Navigate to={"/login"} />
          }
        ></Route>
        <Route
          path="/signup"
          element={
            !authUser ? (
              <SignUpPage></SignUpPage>
            ) : (
              <Navigate to={"/"}></Navigate>
            )
          }
        ></Route>
        <Route
          path="/login"
          element={
            !authUser ? <LoginPage></LoginPage> : <Navigate to={"/"}></Navigate>
          }
        ></Route>
        <Route path="/settings" element={<SettingsPage></SettingsPage>}></Route>
        <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
      </Routes>


      <Toaster></Toaster>
    </div>
  );
};

export default App;
