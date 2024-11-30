import React, { useState } from 'react';
import './BloodDonateForm.css';

const BloodDonateForm = () => {
  const [formData, setFormData] = useState({
    bloodGroup: '',
    location: '',
    disease: '',
    age: '',
    lastDonation: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="blood-donate-form">
      <h2>Donate Blood</h2>
      <form onSubmit={handleSubmit}>
        <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} required>
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
        <input
          type="text"
          name="location"
          placeholder="Your Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="disease"
          placeholder="Any diseases? (Type 'None' if not applicable)"
          value={formData.disease}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Your Age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="lastDonation"
          placeholder="Last Donation Date"
          value={formData.lastDonation}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BloodDonateForm;

