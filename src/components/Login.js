import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { GoogleApiButton } from "./GoogleApiButton";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

//Component to hold layout of the form.
//Currently static.
//Buttons route back to Landing component.
const LoginForm = () => {
  return (
    <>
      <div className="row">
        <Form>
          <FormGroup>
            <Label htmlFor="email">Email address</Label>
            <Input type="email" id="email" placeholder="email@email.com" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="Password" placeholder="Password" />
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" /> Remember me
            </Label>
          </FormGroup>
          <Link to="/">
            <Button className="btn btn-light">Login</Button>
            <Button className="btn btn-danger">Cancel</Button>
          </Link>
        </Form>
      </div>
    </>
  );
};

//Display component for Login page.
//Imports and renders GoogleApiButton and the LoginForm component in this file.
class Login extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Header />
        <div className="d-flex justify-content-center mt-5 mb-2">
          <h2>Login</h2>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <GoogleApiButton />
        </div>
        <div className="d-flex justify-content-center mt-3">
          <LoginForm />
        </div>
        <Footer />
      </>
    );
  }
}

export default Login;
