import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signin from './pages/Signin/Signin';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect root path to /signup */}
        <Route path="/" element={<Navigate to="/signup" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signin />} />
      </Routes>
    </Router>
  );
};

export default App;
