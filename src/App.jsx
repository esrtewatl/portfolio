import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './global.css';

import Portfolio from './Components/Portfolio';
import Resume from './Components/Resume'; // Import the Resume component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} /> {/* Add this route */}
      </Routes>
    </Router>
  );
}

export default App;
