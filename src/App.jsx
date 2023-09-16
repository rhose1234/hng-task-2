import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MovieDetail from './components/MovieDetail'; // Import MovieDetail component separately
import Error from './components/Error'; // Import Error component separately

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
