import React, { useState } from "react";
import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/esm/Button";
import Collapse from "react-bootstrap/Collapse";
import Alert from "react-bootstrap/Alert";

import { useHistory } from "react-router-dom";
function FadeCard() {
  const [open, setOpen] = useState(false);
  const Opener = () => {
    setOpen(!open).then((o) => {
      alert(
        "Hey nice to see you"
      )
    });
  };
  var myLists = [
    {
      name: "adhil",
      jobe: "mern stacker",
      url: "https://picsum.photos/536/354",
    },
    {
      name: "anver",
      jobe: "mern stacker",
      url: "https://picsum.photos/536/354",
    },
    {
      name: "ashker",
      jobe: "mern stacker",
    },
    {
      name: "ammen",
      jobe: "mern stacker",
    },
    {
      name: "irshad",
      jobe: "mern stacker",
    },
  ];

  const histoey = useHistory();
  const ReturnHome = () => {
    histoey.push("/");
  };

  return (
    <div className="rowCard">
      <Row>
        {myLists.map((obj) => (
          <Col>
            <Card style={{ width: "18rem", margin: "1rem" }}>
              <Card.Img variant="top" src={obj.url} />
              <Card.Title>{obj.name}</Card.Title>
              <Card.Text>{`Job:${obj.jobe}`}</Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
              {/* <ListGroup className="list-group-flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup> */}
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
                {/* {obj.url ? (
                  <Button
                    onClick={Opener} //action needed
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                  >
                    to_show
                  </Button>
                ) : (
                  " "
                )}
                <Collapse in={obj.url ? open : ""}>
                  <div id="example-collapse-text">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                  </div>
                </Collapse> */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="homebtn">
        <Button onClick={ReturnHome} variant="danger">
          Danger
        </Button>{" "}
      </div>
    </div>
  );
}

export default FadeCard;
