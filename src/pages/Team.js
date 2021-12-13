import React, { useState, useEffect, useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import TeamContext from "../context/team-context";

const Team = () => {
  const params = useParams();
  const teamContext = useContext(TeamContext);
  const [membersData, setMembersData] = useState([]);

  const teamData =
    teamContext.filteredTeamData.length !== 0
      ? teamContext.filteredTeamData.find((team) => {
          return team.team_id == params.team;
        })
      : []; // arr

  console.log(teamData);

  const rank =
    teamContext.filteredTeamData.length !== 0
      ? teamContext.filteredTeamData.findIndex(({ team_id }) => {
          return team_id == params.team;
        }) + 1
      : 0;

  const fetchMembersData = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMembersData(data);
  };

  useEffect(() => {
    if (teamData.length !== 0) {
      const url = `https://api.opendota.com/api/teams/${teamData.team_id}/players`;
      fetchMembersData(url);
    }
  }, [teamData]);

  return (
    <div>
      {teamContext.filteredTeamData.length !== 0 ? (
        <>
          <h3>RANK: {rank}</h3>
          <h1>{teamData.name}</h1>

          <ul>Current Members</ul>
          {membersData.map((member) => {
            return member.is_current_team_member === true &&
              member.name !== " " &&
              member.name !== "" &&
              member.name !== null ? (
              <li>
                <NavLink to={`/teams/${teamData.team_id}/${member.account_id}`}>
                  {member.name}
                </NavLink>
              </li>
            ) : (
              ""
            );
          })}
          <ul>Past Members</ul>
          {membersData.map((member) => {
            return member.is_current_team_member !== true &&
              member.name !== " " &&
              member.name !== "" &&
              member.name !== null ? (
              <li>
                <NavLink to={`/teams/${teamData.team_id}/${member.account_id}`}>
                  {member.name}
                </NavLink>
              </li>
            ) : (
              ""
            );
          })}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Team;
