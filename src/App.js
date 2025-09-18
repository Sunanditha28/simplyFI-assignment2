import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./components/UserCard";
import EditUserModal from "./components/EditUserModal";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  const handleEditSave = (id, newDetails) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, ...newDetails } : u))
    );
    setEditingUser(null);
  };

  return (
    <div className="app-container">
      <div className="card-grid">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onDelete={handleDelete}
            onEdit={() => setEditingUser(user)}
          />
        ))}
      </div>

      
      {editingUser && (
        <EditUserModal
          user={editingUser}
          onCancel={() => setEditingUser(null)}
          onSave={handleEditSave}
        />
      )}
    </div>
  );
}

export default App;
