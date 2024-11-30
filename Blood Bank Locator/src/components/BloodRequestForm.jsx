import React, { useState } from 'react';
import './BloodRequestForm.css';

const BloodRequestForm = () => {
  const [pincode, setPincode] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [donors, setDonors] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically fetch data from your backend
    // For now, we'll just simulate a response
    setDonors(Math.floor(Math.random() * 10));
  };

  return (
    <div className="blood-request-form">
      <h2>Request Blood</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your Pincode"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          required
        />
        <select value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)} required>
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
        <button type="submit">Find Donors</button>
      </form>
      {donors !== null && (
        <div className="donors-info">
          <p>Number of potential donors in your area: {donors}</p>
        </div>
      )}
    </div>
  );
};

export default BloodRequestForm;

