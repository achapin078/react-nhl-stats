import { chunkArray } from '../utils/arrayHelper.js';

const TeamList = ({ teams }) => {
    const teamColumns = chunkArray(teams, 8);

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
            {teamColumns.map((column, index) => (
                <ul key={index} style={{ listStyleType: 'none', padding: 0 }}>
                    {column.map((team) => (
                        <li key={team.id}>
                            {team.fullName}
                        </li>
                    ))}
                </ul>
            ))}

        </div>
    );
};

export default TeamList;