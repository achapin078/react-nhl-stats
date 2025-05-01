import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://corsproxy.io/?url=https://api.nhle.com/stats/rest/en/team')
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch teams");
        return res.json();
      })
      .then((data) => {
        const activeTeams = data.data.filter((team) => team.endSeason == null);
        setTeams(activeTeams);
        console.log("API Response:", data);
        console.log("Teams:", data.fullName);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      })
  }, []);
  
  return (
    <div style={{ padding: '20p'}}>
      <h1>NHL Teams</h1>
      <ul>
        {teams.map(team => (
          <li key={team.id}>
            <strong>ID:</strong>{team.id} <strong>{team.fullName}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
