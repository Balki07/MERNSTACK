import { useEffect, useState } from "react";
import API from "../../services/api";

function CoachDashboard() {
  const [players, setPlayers] = useState([]);

  const [playerId, setPlayerId] = useState("");
  const [reason, setReason] = useState("");

  // Load all players when page loads
  useEffect(() => {
    loadPlayers();
  }, []);

  // Get players from DB
  const loadPlayers = async () => {
    try {
      const res = await API.get("/users?role=player");
      setPlayers(res.data);
    } catch (err) {
      console.error("Load Players Error:", err);
    }
  };

  // Send delete request
  const sendRequest = async () => {
    try {
      if (!playerId || !reason) {
        alert("Please select player and enter reason");
        return;
      }

      await API.post("/requests", {
        playerId: Number(playerId),
        reason: reason.trim(),
        status: "pending",
        date: new Date().toLocaleString(),
      });

      alert("Request Sent to Admin ✅");

      // Clear inputs
      setPlayerId("");
      setReason("");
    } catch (err) {
      console.error("Send Request Error:", err);
      alert("Server Error ❌");
    }
  };

  return (
    <div className="page">
      <h1>🧢 Coach Dashboard</h1>

      <h3>Request Player Deletion</h3>

      {/* Player Selector */}
      <select
        value={playerId}
        onChange={(e) => setPlayerId(e.target.value)}
      >
        <option value="">-- Select Player --</option>

        {players.map((p) => (
          <option key={p.id} value={p.id}>
            {p.name} (ID: {p.id})
          </option>
        ))}
      </select>

      {/* Reason Input */}
      <input
        type="text"
        placeholder="Enter Reason"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
      />

      {/* Send Button (IMPORTANT: type=button) */}
      <button type="button" onClick={sendRequest}>
        Send Request
      </button>
    </div>
  );
}

export default CoachDashboard;