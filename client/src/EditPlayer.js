import React, { useState } from 'react';
import axios from 'axios';

const EditPlayer = ({ player, onSave }) => {
  const [formData, setFormData] = useState({
    firstName: player.firstName,
    lastName: player.lastName,
    hitsPerSeason: player.hitsPerSeason,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4000/api/players/${player._id}`, formData);
      onSave();
    } catch (error) {
      console.error('Error saving player data', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
      <div>
        <label>First Name: </label>
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Last Name: </label>
        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Hits Per Season: </label>
        <input
          name="hitsPerSeason"
          value={formData.hitsPerSeason}
          onChange={handleChange}
          type="number"
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default EditPlayer;

