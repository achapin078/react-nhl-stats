export async function fetchTeamRoster(teamId) {
    try {
        const response = await fetch(`https://corsproxy.io/?url=https://api-web.nhle.com/v1/roster/${teamId}/20242025`);
        const data = await response.json();
        console.log(data);
        return data; // return array of players
    } catch(error) {
        console.error('Error fetching team roster:', error);
        return []; //return empty array on error
    }
}