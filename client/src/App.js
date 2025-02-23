import React, { useEffect } from 'react';
import axios from 'axios';
import PlayerList from './PlayerList';

function App() {
  // On mount, sync players from external API to DB
  useEffect(() => {
    axios.get('http://localhost:4000/api/players/sync')
      .then(() => console.log('Synced successfully'))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Baseball Players</h1>
      <PlayerList />
    </div>
  );
}

export default App;

