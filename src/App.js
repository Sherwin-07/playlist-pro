// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import LandingPage from './components/LandingPage';
import PopularArtists from './components/PopularArtists';
import CreatePlaylist from './components/CreatePlaylist';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/popular-artists" element={<PopularArtists />} />
        <Route path="/create-playlist" element={<CreatePlaylist />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
