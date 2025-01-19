import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ListUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching users!", error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/api/users/${id}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== id));
      })
      .catch(error => {
        console.error("There was an error deleting the user!", error);
      });
  };

  return (
    <div>
      <h2>User List</h2>
      <Link to="/create"><button>Create New User</button></Link>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <span>{user.name} - {user.email} - {user.phone}</span>
            <Link to={`/view/${user.id}`}><button>View</button></Link>
            <Link to={`/edit/${user.id}`}><button>Edit</button></Link>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListUser;
