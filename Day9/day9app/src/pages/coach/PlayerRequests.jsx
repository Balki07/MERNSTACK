import { useEffect, useState, useContext } from "react";
import API from "../../services/api";
import { AuthContext } from "../../context/AuthContext";

function PlayerRequests() {
  const { user } = useContext(AuthContext);

  const [players, setPlayers] = useState([]);

  // Load players
  useEffect(() => {
    loadPlayers();
  }, []);

  const loadPlayers = async () => {
    try {
      const res = await API.get("/users?role=player");
      setPlayers(res.data);
    } catch (err) {
      console.error("Load Players Error:", err);
    }
  };

  return (
    <div className="page">
      <h1>🧢 My Players</h1>

      <p>Coach: <b>{user?.name}</b></p>

      {players.length === 0 && <p>No players found.</p>}

      <table border="1" cellPadding="10">
       <thead>
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Email</th>
    <th>Role</th>
  </tr>
</thead>

<tbody>
  {players.map((p) => (
    <tr key={p.id}>
      <td>{p.id}</td>
      <td>{p.name}</td>
      <td>{p.email}</td>
      <td>{p.role}</td>
    </tr>
  ))}
</tbody>
      </table>
    </div>
  );
}

export default PlayerRequests;