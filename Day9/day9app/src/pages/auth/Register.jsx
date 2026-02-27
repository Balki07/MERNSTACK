import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import API from "../../services/api";
import { AuthContext } from "../../context/AuthContext";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("player");

  const nav = useNavigate();
  const { login } = useContext(AuthContext);

  const handleRegister = async () => {
    if (!name || !email || !password) {
      alert("Fill all fields");
      return;
    }

    const res = await API.post("/users", {
      name,
      email,
      password,
      role,
    });

    login(res.data);

    alert("Registration Successful!");

    // Go to home
    nav("/home");
  };

  return (
    <div className="auth-box">
      <h2>Register</h2>

      <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <select onChange={(e) => setRole(e.target.value)}>
        <option value="player">Player</option>
        <option value="coach">Coach</option>
      </select>

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;