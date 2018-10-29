import React from "react";
import { Jumbotron, Button, Container, Row, Col } from "reactstrap";

const MainJumbotron = () => {
  return (
    <Jumbotron className="mt-1">
      <Container>
        <section>
          <img src={require("./Logo.png")} />
        </section>
        <Row>
          <Col>
            <Button color="primary">Recently played</Button>
          </Col>
          <Col>
            <Button color="primary">Favorites<img src={require("./Favicon.png")} height="22px" className="favicon"></img></Button>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default MainJumbotron;
