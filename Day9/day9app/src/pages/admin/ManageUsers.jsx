import { useEffect, useState } from "react";
import API from "../../services/api";

function ManageUsers() {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const res = await API.get("/users");
    setUsers(res.data);
  };

  const deleteUser = async (id) => {
    await API.delete(`/users/${id}`);
    loadUsers();
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div>
      <h2>Manage Users</h2>

      {users.map((u) => (
        <div key={u.id}>
          {u.name} - {u.role}
          <button onClick={() => deleteUser(u.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ManageUsers;