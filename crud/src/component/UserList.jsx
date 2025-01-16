import React, { useState, useEffect } from "react";
import axios from "axios";
import UserForm from "./UserForm";

function UserList() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await axios.get("http://localhost:8080/users");
    setUsers(response.data);
  };

  const deleteUser = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (confirmDelete) {
      await axios.delete(`http://localhost:8080/users/${id}`);
      fetchUsers();
    }
  };

  const saveUser = async (user) => {
    if (user.id) {
      await axios.put(`http://localhost:8080/users/${user.id}`, user);

    } else {
      await axios.post("http://localhost:8080/users", user);
    }
    fetchUsers();
    setEditingUser(null);
  };

  return (
    <div>
      <UserForm user={editingUser} saveUser={saveUser} />
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <button onClick={() => setEditingUser(user)}>Edit</button>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;