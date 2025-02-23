import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlayerDetails from './PlayerDetails';

const PlayerList = () => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayerId, setSelectedPlayerId] = useState(null);

  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = async () => {
    try {
      const { data } = await axios.get('http://localhost:4000/api/players');
      setPlayers(data);
    } catch (error) {
      console.error('Error fetching players', error);
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Left: Player List */}
      <div style={{ width: '30%', marginRight: '2rem' }}>
        <h2>Players</h2>
        <ul>
          {players.map((player) => (
            <li
              key={player._id}
              onClick={() => setSelectedPlayerId(player._id)}
              style={{ cursor: 'pointer', marginBottom: '0.5rem' }}
            >
              {player.rank}. {player.firstName} {player.lastName} — {player.hitsPerSeason} hits
            </li>
          ))}
        </ul>
      </div>
      {/* Right: Selected Player Details */}
      <div style={{ width: '70%' }}>
        {selectedPlayerId && <PlayerDetails id={selectedPlayerId} onUpdate={fetchPlayers} />}
      </div>
    </div>
  );
};

export default PlayerList;

