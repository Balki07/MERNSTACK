import { useEffect, useState } from "react";
import API from "../../services/api";

function Requests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    loadRequests();
  }, []);

  const loadRequests = async () => {
    const res = await API.get("/requests");
    setRequests(res.data);
  };

  const approve = async (req) => {
    await API.patch(`/requests/${req.id}`, {
      status: "approved",
    });

    alert("Request Approved");
    loadRequests();
  };

  const reject = async (req) => {
    await API.patch(`/requests/${req.id}`, {
      status: "rejected",
    });

    alert("Request Rejected");
    loadRequests();
  };

  return (
    <div className="page">
      <h2>Pending Requests</h2>

      {requests.length === 0 && <p>No requests</p>}

      {requests.map((r) => (
        <div
          key={r.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px",
          }}
        >
          <p>
            <b>Player:</b> {r.playerName}
          </p>

          <p>
            <b>Reason:</b> {r.reason}
          </p>

          <p>
            <b>Status:</b> {r.status}
          </p>

          {r.status === "pending" && (
            <>
              <button onClick={() => approve(r)}>Approve</button>
              <button onClick={() => reject(r)}>Reject</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Requests;