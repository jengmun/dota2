import React from "react";
import { NavLink } from "react-router-dom";

const TeamRow = (props) => {
  return (
    <tr>
      <td>{props.rank}</td>
      <td>
        <NavLink to={`/teams/${props.data.team_id}`}>
          {props.data.logo_url !== null && (
            <img src={props.data.logo_url} width="50px" />
          )}
          {props.data.name}
        </NavLink>
      </td>
      <td>{props.data.rating}</td>
      <td>{props.data.wins}</td>
      <td>{props.data.losses}</td>
    </tr>
  );
};

export default TeamRow;
