import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateStudent from './pages/CreateStudent';
import ListStudent from './pages/ListStudent';
import ViewStudent from './pages/ViewStudent';
import EditStudent from './pages/EditStudent';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>User Management</h1>
        <Routes>
          <Route path="/" element={<ListStudent />} />
          <Route path="/create" element={<CreateStudent />} />
          <Route path="/view/:id" element={<ViewStudent />} />
          <Route path="/edit/:id" element={<EditStudent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
