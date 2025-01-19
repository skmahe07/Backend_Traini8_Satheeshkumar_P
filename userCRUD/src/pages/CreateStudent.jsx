import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateUser = () => {
  const [user, setUser] = useState({ name: '', email: '', phone: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8080/api/users', user)
      .then(response => {
        alert('User created successfully');
        navigate('/');
      })
      .catch(error => {
        console.error("There was an error creating the user!", error);
      });
  };

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={user.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} />
        <input type="text" name="phone" placeholder="Phone" value={user.phone} onChange={handleChange} />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateUser;
