import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import TeamContext from "../context/team-context";

const Player = () => {
  const teamContext = useContext(TeamContext);

  const params = useParams();

  const data =
    teamContext.playerData.length !== 0
      ? teamContext.playerData.find((player) => {
          return player.account_id == params.player;
        })
      : "";

  console.log(data);

  return (
    <>
      {data !== "" ? (
        <>
          <h1>{data.team_name}</h1>
          <img src={data.avatar} />
          <h1>
            <a href={data.profileurl} target="_blank">
              {data.name}
            </a>
          </h1>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Player;
