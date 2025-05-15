import { Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import { Loader } from "lucide-react";
import {
  HomePage,
  LoginPage,
  ProfilePage,
  SettingsPage,
  SignUpPage,
} from "./pages";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";
import PrivateRoute from "./components/Routes/PrivateRoute";
import PublicRoute from "./components/Routes/PublicRoute";
import { Toaster } from "react-hot-toast";
const App = () => {
  const { checkAuth, authUser, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth && !authUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute user={authUser}>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute user={authUser}>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute user={authUser}>
              <SignUpPage />
            </PublicRoute>
          }
        />
        <Route path="/settings" element={<SettingsPage />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute user={authUser}>
              <ProfilePage />
            </PrivateRoute>
          }
        />
      </Routes>

      <Toaster />
    </div>
  );
};
export default App;
