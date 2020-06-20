import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { GoogleApiButton } from './GoogleApiButton';
import { Link } from 'react-router-dom';

//Component to hold layout of the form.
//Currently static.
//Buttons route back to Landing component.
const CreateAccountForm = () => {
  return (
    <Form>
      <FormGroup>
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" placeholder="First Last" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="email">Email address</Label>
        <Input type="email" id="email" placeholder="email@email.com" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="Password" placeholder="Password" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="verifyPassword">Verify Password</Label>
        <Input
          type="password"
          id="verifyPassword"
          placeholder="Verify Password"
        />
      </FormGroup>
      <Link to="/">
        <Button className="btn btn-light">Create an Account</Button>
        <Button className="btn btn-danger">Cancel</Button>
      </Link>
    </Form>
  );
};

//Display component for Create an Account page.
// Imports and renders GoogleApiButton and the CreatAccountForm component in this file.
class CreateAccount extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div className="d-flex justify-content-center mt-5 mb-2">
          <h2>Create an Account</h2>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <GoogleApiButton />
        </div>
        <div className="d-flex justify-content-center mt-3">
          <CreateAccountForm />
        </div>
      </>
    );
  }
}

export default CreateAccount;
