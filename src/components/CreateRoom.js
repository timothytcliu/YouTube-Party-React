import React, { Component } from "react";
import Header from "./Header";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from "reactstrap";
import { Link } from "react-router-dom";
import Footer from "./Footer";

class CreateRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
      feedback: "",
      touched: {
        roomName: false,
        password: false,
      },
    };
  }

  validate(roomName, password) {
    const errors = {
      roomName: "",
      password: "",
      i: 0,
    };

    if (this.state.touched.roomName) {
      if (this.props.roomName.length === 0) {
        errors.roomName = "Room name required.";
        errors.i = 1;
      }
      if (this.props.roomName.length > 25) {
        errors.roomName = "Room name must be less than 25 characters.";
        errors.i = 1;
      }
    }
    if (this.state.touched.password) {
      if (this.props.password.length === 0) {
        errors.password = "Password is required.";
        errors.i = 1;
      }
    }
    if (this.state.touched.password === false) {
      errors.i = 1;
    }
    if (this.state.touched.roomName === false) {
      errors.i = 1;
    }

    return errors;
  }

  handleBlur = (field) => () => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  render() {
    const errors = this.validate(this.props.roomName, this.props.password);
    const allowSubmit = errors.i === 1 ? true : false;
    console.log(errors);

    return (
      <>
        <Header />
        <div className="row row-content justify-content-center">
          <Form onSubmit={this.props.handleSubmit}>
            <FormGroup className="mt-5" row>
              <Label htmlFor="roomName">Room Name</Label>
              <Input
                type="text"
                id="roomName"
                name="roomName"
                placeholder="Room Name"
                value={this.state.roomName}
                invalid={errors.roomName}
                onBlur={this.handleBlur("roomName")}
                onChange={this.props.handleInputChange}
              />
              <FormFeedback>{errors.roomName}</FormFeedback>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="password">Password</Label>
              <Input
                type="text"
                id="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                invalid={errors.password}
                onBlur={this.handleBlur("password")}
                onChange={this.props.handleInputChange}
              />
              <FormFeedback>{errors.password}</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Link to="/room">
                <Button
                  disabled={allowSubmit}
                  type="submit"
                  size="lg"
                  color="secondary"
                >
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
        <Footer />
      </>
    );
  }
}

export default CreateRoom;
