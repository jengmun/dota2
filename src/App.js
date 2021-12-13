import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import TeamContext from "./context/team-context";
import Nav from "./components/header/Nav";
import Main from "./pages/Main";
import Heroes from "./pages/Heroes";
import Hero from "./pages/Hero";
import Teams from "./pages/Teams";
import Team from "./pages/Team";
import Player from "./pages/Player";
import Matches from "./pages/Matches";

function App() {
  const [teamData, setTeamData] = useState([]);
  const [filteredTeamData, setFilteredTeamData] = useState([]);
  const [playerData, setPlayerData] = useState([]);

  const fetchTeamData = async () => {
    try {
      const res = await fetch("https://api.opendota.com/api/teams");
      const data = await res.json();
      const filteredData = data.filter((team) => {
        return team.name !== "";
      });
      setTeamData(filteredData);
    } catch (error) {} // to update
  };

  const fetchPlayerData = async () => {
    const res = await fetch("https://api.opendota.com/api/proPlayers");
    const data = await res.json();
    setPlayerData(data);
    const filteredData = [];
    for (const team of teamData) {
      if (
        data.find(({ team_id }) => {
          return team_id === team.team_id;
        })
      ) {
        filteredData.push(team);
      }
    }
    setFilteredTeamData(filteredData);
  };

  useEffect(() => {
    fetchTeamData();
    fetchPlayerData();
  }, []);

  useEffect(() => {
    fetchPlayerData();
  }, [teamData]);

  return (
    <div>
      <Nav></Nav>
      <TeamContext.Provider value={{ playerData, filteredTeamData }}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/heroes" component={Heroes} />
          <Route path="/heroes/:hero" component={Hero} />
          <Route exact path="/teams" component={Teams} />
          <Route path="/teams/:team" component={Team} />
          <Route path="/matches" component={Matches} />
        </Switch>
      </TeamContext.Provider>
    </div>
  );
}

export default App;
