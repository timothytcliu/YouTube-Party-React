import React, { Component } from "react";
import Header from "./Header";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import { Switch, Route, Router } from "react-router-dom";
import Room from "./Room";
import HomePage from "./HomePage";
import Landing from "./Landing";

class CreateRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roomName: "",
      password: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log("Current state is: " + JSON.stringify(this.state));
    alert("Current state is: " + JSON.stringify(this.state));
    event.preventDefault();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <>
        <Header />
        <div className="row row-content justify-content-center">
          <Form onSubmit={this.handleSubmit}>
            <FormGroup className="mt-5" row>
              <Label htmlFor="roomName">Room Name</Label>
              <Input
                type="text"
                id="roomName"
                name="roomName"
                placeholder="Room Name"
                value={this.state.roomName}
                onChange={this.handleInputChange}
              />
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="password">Password</Label>
              <Input
                type="text"
                id="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Link to="/room">
                <Button type="submit" size="lg" color="secondary">
                  Enter
                </Button>
              </Link>
              <Link to="/">
                <Button className="ml-5" size="lg" color="danger">
                  Cancel
                </Button>
              </Link>
            </FormGroup>
          </Form>
        </div>
      </>
    );
  }
}

export default CreateRoom;
