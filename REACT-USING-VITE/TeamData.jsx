import React from 'react';
import PropTypes from 'prop-types';

const TeamTable = ({ teams }) => {
  // Function to handle button click
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <h1>Football League</h1>

      <button onClick={handleClick}>Click Me</button>

      {/* Table to display teams */}
      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>Team</th>
            <th>Played</th>
            <th>Won</th>
            <th>Drawn</th>
            <th>Lost</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={index}>
              <td>{team.name}</td>
              <td>{team.played}</td>
              <td>{team.won}</td>
              <td>{team.drawn}</td>
              <td>{team.lost}</td>
              <td>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* List of teams with points */}
      <ul>
        {teams.map((team, index) => (
          <li key={index}>{team.name}: {team.points} points</li>
        ))}
      </ul>
    </div>
  );
};

// PropTypes validation for teams prop
TeamTable.propTypes = {
  teams: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      played: PropTypes.number.isRequired,
      won: PropTypes.number.isRequired,
      drawn: PropTypes.number.isRequired,
      lost: PropTypes.number.isRequired,
      points: PropTypes.number.isRequired
    })
  ).isRequired
};

// Example usage of the TeamTable component
const TeamData = () => {
  // Sample data representing the teams
  const teams = [
    { name: 'Team A', played: 10, won: 6, drawn: 2, lost: 2, points: 20 },
    { name: 'Team B', played: 10, won: 5, drawn: 3, lost: 2, points: 18 },
    { name: 'Team C', played: 10, won: 4, drawn: 4, lost: 2, points: 16 }
  ];

  return <TeamTable teams={teams} />;
};

export default TeamData;
