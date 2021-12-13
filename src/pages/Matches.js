import React, { useState, useEffect } from "react";

const Matches = () => {
  const [matchData, setMatchData] = useState([]);

  const fetchMatchData = async () => {
    const res = await fetch("https://api.opendota.com/api/proMatches");
    const data = await res.json();
    const filteredData = data.filter((match) => {
      return match.radiant_score !== 0 || match.dire_score !== 0;
    });
    setMatchData(filteredData);
  };

  useEffect(() => {
    fetchMatchData();
  }, []);

  const matches = matchData.map((match) => {
    return (
      <tr>
        <td>{match.radiant_name || "Radiant"}</td>
        <td>{match.dire_name || "Dire"}</td>
        <td>
          {match.radiant_score} : {match.dire_score}
        </td>
        <td>{match.league_name}</td>
      </tr>
    );
  });

  return (
    <div>
      <table>
        <tr>
          <th>Radiant</th>
          <th>Dire</th>
          <th>Score</th>
          <th>League</th>
        </tr>
        {matches}
      </table>
    </div>
  );
};

export default Matches;
