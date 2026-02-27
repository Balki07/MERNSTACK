import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import API from "../../services/api";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);
  const nav = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await API.get(
        `/users?email=${email}&password=${password}`
      );

      if (res.data.length === 0) {
        alert("Invalid Credentials");
        return;
      }

      const user = res.data[0];

      login(user);

      nav("/home");
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <div className="auth-box">
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;