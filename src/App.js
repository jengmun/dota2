import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./pages/Main";
import Heroes from "./pages/Heroes";
import Hero from "./pages/Hero";

function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/heroes">
          <Heroes />
        </Route>
        <Route path="/heroes/:hero">
          <Hero />
        </Route>
        {/* <Route path="/teams" component={Teams} />
        <Route path="/matches" component={Matches} /> */}
      </Switch>
    </div>
  );
}

export default App;
