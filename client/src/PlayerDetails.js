import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditPlayer from './EditPlayer';

const PlayerDetails = ({ id, onUpdate }) => {
  const [player, setPlayer] = useState(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    fetchPlayer();
  }, [id]);

  const fetchPlayer = async () => {
    try {
      const { data } = await axios.get(`http://localhost:4000/api/players/${id}`);
      setPlayer(data);
    } catch (error) {
      console.error('Error fetching player details', error);
    }
  };

  if (!player) return <div>Loading...</div>;

  return (
    <div>
      <h2>Details for {player.firstName} {player.lastName}</h2>
      <p><strong>Rank:</strong> {player.rank}</p>
      <p><strong>Hits per Season:</strong> {player.hitsPerSeason}</p>
      <p><strong>Description:</strong> {player.description || 'No description yet.'}</p>
      
      {editing ? (
        <EditPlayer
          player={player}
          onSave={() => {
            setEditing(false);
            onUpdate(); // Refresh the list in parent
            fetchPlayer(); // Refresh local details
          }}
        />
      ) : (
        <button onClick={() => setEditing(true)}>Edit</button>
      )}
    </div>
  );
};

export default PlayerDetails;

