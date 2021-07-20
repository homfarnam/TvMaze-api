import Episode from "pages/episode/Episode";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/episode/:id" component={Episode} />
      </Switch>
    </>
  );
};

export default App;
