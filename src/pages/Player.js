import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
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
          <img src={data.avatar} />
          <div>
            <a href={data.profileurl} target="_blank">
              {data.name}
            </a>
            <h4>
              Current Team: <br></br>
              <Link to={`/teams/${data.team_id}`}>{data.team_name}</Link>
            </h4>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Player;
