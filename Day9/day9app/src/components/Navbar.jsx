import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/home">Home</Link>{" | "}

      {user?.role === "admin" && (
        <>
          <Link to="/admin">Admin</Link>{" | "}
          <Link to="/manage-users">Manage Users</Link>{" | "}
          <Link to="/requests">Requests</Link>{" | "}
        </>
      )}

      {user?.role === "player" && (
        <>
          <Link to="/player">Player</Link>{" | "}
          <Link to="/squad">Squad</Link>{" | "}
        </>
      )}

      {user ? (
        <>
          <span>Welcome, {user.name}</span>{" "}
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}

export default Navbar;