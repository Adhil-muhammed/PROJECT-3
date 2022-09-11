import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
// import { Container } from "react-bootstrap";
// import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/esm/Button";
import axios from "axios";
import "./FadeCard.css";
import { useHistory } from "react-router-dom";
function FadeCard() {
  const [item, setItem] = useState([]);
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then((response) => {
      setItem(response.data);
    });
  }, []);

  const histoey = useHistory();
  const ReturnHome = () => {
    histoey.push("/");
  };
const action=10
  console.log(item);
  return (
    <div className="main">
      <div className="FadeCardDidcription">
        <h1>Find your nearest Health-Advicer</h1>
      </div>
      <div className="CardsRow">
        {/* <Container> */}

        {/* <Row xs={2} md={6} className="g-4"> */}
        {item?.results?.map((obj) => (
          <Col className="FadeCard" >
            <Card style={{ width: "18rem"}}>
              <Card.Img
                variant="top"
                src={obj.image}
                style={{ width: "18rem"}}
              />
              <Card.Body >
                <Card.Title className="CardImgeLink" as={Link} to=  {`/details/${obj.id}`}>{action ?`Dr: ${obj.name}` : "" }</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {/* </Row> */}
        {/* </Container> */}
      </div>
      <div className="bttn">
        <Button variant="primary" onClick={ReturnHome}>
          {" "}
          click me
        </Button>
      </div>
    </div>
  );
}

export default FadeCard;
