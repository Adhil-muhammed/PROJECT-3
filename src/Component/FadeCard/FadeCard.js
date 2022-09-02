import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/esm/Button";
import {useHistory} from "react-router-dom"
function FadeCard() {
    const histoey=useHistory()
  const  ReturnHome=()=>{
histoey.push('/')
  }
  return (
    <div>
      <Row xs={2} md={4}>
        {Array.from({ length: 12 }).map((_, idx) => (
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2022/04_12/family_chooser_tecnica_m.png"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text></Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="homebtn">
        <Button onClick={ReturnHome} variant="danger">Danger</Button>{" "}
      </div>
    </div>
  );
}

export default FadeCard;
