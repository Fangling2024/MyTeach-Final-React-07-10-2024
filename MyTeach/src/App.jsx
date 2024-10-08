import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './pages/Home';
import Training from './pages/Training';
import Community from './pages/Community';
import Jobs from './pages/Jobs';
import Events from './pages/Events';
import ContactUs from './pages/ContactUs';
import React from 'react';
import './App.css';
import SignIn from './pages/SignIn';
function App() {
  return (
    <Router>
      <div className="App">
        {/* Header Section */}
        <header className="main-header">
          <div className="container nav-bar">
            <div className="logo">
              <img src="/MyTeachLogo.png" alt="My Teach Logo" className="logo-image" />
            </div>
            <nav>
              <ul className="flex">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/training">Training</Link></li>
                <li><Link to="/community">Community</Link></li>
                <li><Link to="/jobs">Jobs</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
                <li><Link to="/signin">Sign In</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Routes Section */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/training" element={<Training />} />
          <Route path="/community" element={<Community />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;