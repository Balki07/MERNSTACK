import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [players, setPlayers] = useState([]);
  const [form, setForm] = useState({
    name: "",
    role: "",
    age: "",
    jersey: ""
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = async () => {
    const res = await fetch("http://localhost:5000/api/players");
    const data = await res.json();
    setPlayers(data);
  };

  /* ======================
     HANDLE INPUT CHANGE
  ====================== */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* ======================
     ADD OR UPDATE PLAYER
  ====================== */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingId) {
      // UPDATE
      await fetch(`http://localhost:5000/api/players/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      setEditingId(null);
    } else {
      // CREATE
      await fetch("http://localhost:5000/api/players", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
    }

    setForm({ name: "", role: "", age: "", jersey: "" });
    fetchPlayers();
  };

  /* ======================
     DELETE PLAYER
  ====================== */
  const deletePlayer = async (id) => {
    await fetch(`http://localhost:5000/api/players/${id}`, {
      method: "DELETE"
    });
    fetchPlayers();
  };

  /* ======================
     EDIT PLAYER
  ====================== */
  const editPlayer = (player) => {
    setForm(player);
    setEditingId(player._id);
  };

  return (
    <div className="app-container">
      <h1>Cricket Management System</h1>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="form">
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="role"
          placeholder="Role"
          value={form.role}
          onChange={handleChange}
          required
        />
        <input
          name="age"
          placeholder="Age"
          type="number"
          value={form.age}
          onChange={handleChange}
          required
        />
        <input
          name="jersey"
          placeholder="Jersey"
          type="number"
          value={form.jersey}
          onChange={handleChange}
          required
        />

        <button type="submit">
          {editingId ? "Update Player" : "Add Player"}
        </button>
      </form>

      <hr />

      {/* PLAYER LIST */}
      <div className="card-grid">
        {players.map((player) => (
          <div key={player._id} className="card">
            <h3>{player.name}</h3>
            <p>Role: {player.role}</p>
            <p>Age: {player.age}</p>
            <p>Jersey: #{player.jersey}</p>

            <div className="card-actions">
              <button onClick={() => editPlayer(player)}>Edit</button>
              <button onClick={() => deletePlayer(player._id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;