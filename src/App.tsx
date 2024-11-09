// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import BreweryDetails from './pages/brewery';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brewery/:id" element={<BreweryDetails />} />
      </Routes>
    </Router>
  );
};

export default App;