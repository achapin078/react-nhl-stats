import React, { useState, useEffect } from 'react';
import { fetchTeamRoster } from '../api/nhl.js';
import '../App.css'

const TeamRoster = ({ teamId }) => {

    const [roster, setRoster] = useState({
        forwards: [],
        defensemen: [],
        goalies: []
    });

    useEffect(() => {
        const loadRoster = async () => {
            const groupedRoster = await fetchTeamRoster(teamId);
            setRoster(groupedRoster);
        };

        if (teamId) {
            loadRoster();
        }
    }, [teamId]);

    return (
        <div>
            <h2>Team Roster</h2>
            <div className="roster-grid">
                <div className="roster-section">
                    <h3>Forwards</h3>
                    <ul>
                        {roster.forwards.map((player) => (
                            <li key={player.id}>
                                {player.firstName.default} {player.lastName.default}
                            </li>
                        ))}
                    </ul>
                    </div>
                <div className="roster-section">
                    <h3>Defensemen</h3>
                    <ul>
                        {roster.defensemen.map((player) => (
                            <li key={player.id}>
                                {player.firstName.default} {player.lastName.default}
                            </li>
                        ))}
                    </ul>
                    </div>
                <div className="roster-section">
                    <h3>Goalies</h3>
                    <ul>
                        {roster.goalies.map((player) => (
                            <li key={player.id}>
                                {player.firstName.default} {player.lastName.default}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TeamRoster;