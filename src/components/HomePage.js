import React, { Component } from "react";
import Landing from "./Landing";
import CreateRoom from "./CreateRoom";
import { Switch, Route } from "react-router-dom";
import Room from "./Room";

class HomePage extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" render={() => <Landing />}></Route>
          <Route exact path="/createroom" render={() => <CreateRoom />}></Route>
          <Route exact path="/room" render={() => <Room />}></Route>
        </Switch>
      </>
    );
  }
}

export default HomePage;
