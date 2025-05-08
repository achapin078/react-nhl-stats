import { useEffect, useState } from 'react';
import TeamList from './components/TeamList.jsx';
import TeamRoster from './components/TeamRoster.jsx';
import { currentTeamIds } from './data/currentTeamIds.js';
import './App.css';

function App() {
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState(null);
  const [selectedTeamId, setSelectedTeamId] = useState(null);

  const handleTeamClick = async (teamId) => {
    setSelectedTeamId(teamId);
}

  useEffect(() => {
    fetch('https://corsproxy.io/?url=https://api.nhle.com/stats/rest/en/team')
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch teams");
        return res.json();
      })
      .then((data) => {

        // Filter the list of teams to only include teams currently active
        const activeTeams = data.data.filter((team) => currentTeamIds.has(team.id));

        // Sort the active teams to be listed alphabetically
        const sortedTeams = activeTeams.sort((a,b) => a.fullName.localeCompare(b.fullName));

        setTeams(sortedTeams);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      })
  }, []);

  return (
    <div style={{ padding: '20p'}}>
      <h1>NHL Teams</h1>
      {error ? <p>Error: {error}</p> : <TeamList teams={teams} handleTeamClick={handleTeamClick} />}
      {selectedTeamId ? (
        <TeamRoster teamId={selectedTeamId} />
      ) : (
        <p style={{ marginTop: '2rem', textAlign: 'center' }}>
          Select a team to view roster.
        </p>
      )}
    </div>
  );
}

export default App
