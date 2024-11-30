import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BloodDonateForm from './components/BloodDonateForm';
import BloodRequestForm from './components/BloodRequestForm';
import LoginPage from './components/LoginPage';
import './App.css';

const HomePage = () => (
  <div className="app">
    <Navbar />
    <main className="main-content">
      <div className="forms-container">
        <BloodDonateForm />
        <BloodRequestForm />
      </div>
    </main>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;

