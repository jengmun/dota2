import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import TeamContext from "../context/team-context";
import styles from "./Player.module.css";

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
        <div className={styles.player}>
          <h3>{data.team_name}</h3>
          <img src={data.avatar} />
          <h3>
            <a href={data.profileurl} target="_blank">
              {data.name}
            </a>
          </h3>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Player;
