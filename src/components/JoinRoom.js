import React from "react";
import { Button, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

function JoinRoom() {
  return (
    <>
      <Container>
        <Row>
          <Col align="center">
            <h2 className="mt-4">Time to Party!</h2>
          </Col>
        </Row>
        <Row>
          <Col align="center">
            <Link to="/createroom">
              <Button className="mt-3" size="lg" color="secondary">
                Create a Room
              </Button>
            </Link>
            <Button className="ml-3 mt-3" size="lg" color="danger">
              Join a Room
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default JoinRoom;
