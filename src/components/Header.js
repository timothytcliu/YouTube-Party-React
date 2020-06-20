import React from "react";
import { Jumbotron, Container, Row, Col } from "reactstrap";
import logo from "../Images/templogo.jpg";

function Header(props) {
  return (
    <React.Fragment>
      <Jumbotron>
        <Container>
          <Row>
            <Col>
              <img src={logo} alt="logo"></img>
              <h1>
                YouTube <span>Party</span>
              </h1>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Row className="blackBar">
        <Col>
          <div> "" </div>
        </Col>
      </Row>
      {props.hello ? <div>hello {props.hello.roomName}</div> : <div></div>}
    </React.Fragment>
  );
}

export default Header;
