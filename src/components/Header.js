import React from 'react';
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap';
import logo from '../Images/templogo.jpg';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <React.Fragment>
      <Jumbotron>
        <Container>
          <Row>
            <Col>
              <Link to="/">
                <img src={logo} alt="logo"></img>
              </Link>
              <h1>
                YouTube <span>Party</span>
              </h1>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Row className="blackBar">
        <Col>
          {/*Login and Create Account buttons displays left side of blackbar*/}
          {/*Routes to Login and CreateAccount components respectively*/}
          <Link to="/login">
            <Button outline color="secondary" size="sm">
              Login
            </Button>
          </Link>
          <Link to="/createaccount">
            <Button outline color="secondary" size="sm">
              Create Account
            </Button>
          </Link>
        </Col>
      </Row>
      {props.hello ? <div>hello {props.hello.roomName}</div> : <div></div>}
    </React.Fragment>
  );
}

export default Header;
