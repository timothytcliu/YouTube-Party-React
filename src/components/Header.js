import React from "react";
import { Jumbotron, Row, Col, Button } from "reactstrap";
import logo from "../Images/templogo.jpg";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <React.Fragment>
      <Jumbotron>
        <div className="container">
          <div className="row">
            <div className="col col-lg-6">
              <Link to="/">
                <img src={logo} alt="logo"></img>
              </Link>
              <h1>
                YouTube <span>Party</span>
              </h1>
            </div>
            <div id="roomName" className="col-lg-6">
              {props.room ? (
                <h2>
                  Hello! Welcome to the <span> {props.room.roomName}</span> Room
                </h2>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
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
    </React.Fragment>
  );
}

export default Header;
