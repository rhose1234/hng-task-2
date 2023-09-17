import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MovieDetail from './components/MovieDetail'; 

function App() {
  return (
    <div className='App'>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" index="true" element={<Home />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
