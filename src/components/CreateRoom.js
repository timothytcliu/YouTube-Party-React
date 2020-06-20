import React, { Component } from 'react';
import Header from './Header';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

class CreateRoom extends Component {
  render() {
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
                value={this.props.roomName}
                onChange={this.props.handleInputChange}
              />
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="password">Password</Label>
              <Input
                type="text"
                id="password"
                name="password"
                placeholder="Password"
                value={this.props.password}
                onChange={this.props.handleInputChange}
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
