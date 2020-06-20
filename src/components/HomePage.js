import React, { Component } from "react";
import Landing from "./Landing";
import CreateRoom from "./CreateRoom";
import { Switch, Route } from "react-router-dom";
import Room from "./Room";
import CreateAccount from "./CreateAccount";
import Login from "./Login";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roomName: "",
      password: "",
    };
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" render={() => <Landing />}></Route>
          <Route
            exact
            path="/createroom"
            render={(props) => (
              <CreateRoom
                handleInputChange={this.handleInputChange}
                handleSubmit={this.handleSubmit}
              />
            )}
          />
          <Route
            exact
            path="/room"
            render={(props) => <Room data1={this.state} />}
          />
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/createaccount" render={() => <CreateAccount />} />
        </Switch>
      </>
    );
  }
}

export default HomePage;
