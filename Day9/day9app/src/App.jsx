import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import Unauthorized from "./pages/Unauthorized";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageUsers from "./pages/admin/ManageUsers";
import Requests from "./pages/admin/Requests";

import PlayerDashboard from "./pages/player/PlayerDashboard";
import Squad from "./pages/player/Squad";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Admin */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/manage-users"
          element={
            <ProtectedRoute role="admin">
              <ManageUsers />
            </ProtectedRoute>
          }
        />

        <Route
          path="/requests"
          element={
            <ProtectedRoute role="admin">
              <Requests />
            </ProtectedRoute>
          }
        />

        {/* Player */}
        <Route
          path="/player"
          element={
            <ProtectedRoute role="player">
              <PlayerDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/squad"
          element={
            <ProtectedRoute role="player">
              <Squad />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;