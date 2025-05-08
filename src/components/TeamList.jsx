import { chunkArray } from '../utils/arrayHelper.js';

const TeamList = ({ teams, handleTeamClick }) => {
    const teamColumns = chunkArray(teams, 8);

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
            {teamColumns.map((column, index) => (
                <ul key={index} style={{ listStyleType: 'none', padding: 0 }}>
                    {column.map((team) => (
                        <li key={team.id}
                            onClick={() => handleTeamClick(team.triCode)}
                            style={{ cursor: 'pointer', padding: '8px', borderBottom: '1px solid #ccc' }}    
                        >
                            {team.fullName}
                        </li>
                    ))}
                </ul>
            ))}
            </div>
    );
};

export default TeamList;