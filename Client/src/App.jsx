import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WelcomeSplash from './components/WelcomeSplash'; // New Splash Component

// Pages
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Search from './pages/Search';
import Dashboard from './pages/dashboard';
import PostRequest from './pages/PostRequest';
import Profile from './pages/profile';
import BloodBanks from './pages/BloodBanks';
import ModernSearch from './pages/ModernSerach';
import AboutUs from './pages/aboutus';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar only after Splash */}
      {!showSplash && <Navbar />}

      <main className={!showSplash ? "flex-grow pt-20" : "flex-grow"}>
        {showSplash ? (
          <WelcomeSplash onFinish={() => setShowSplash(false)} />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/search" element={<Search />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/post-request" element={<PostRequest />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/blood-banks" element={<BloodBanks />} />
            <Route path="/test-search" element={<ModernSearch />} />
          </Routes>
        )}
      </main>

      {/* Footer only after Splash */}
      {!showSplash && <Footer />}
    </div>
  );
}

export default App;
