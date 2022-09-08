import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/esm/Button";
import axios from "axios";
import "./FadeCard.css"
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

  console.log(item);
  return (
    <div>
      <div className="CardsRow">

      {/* <Row xs={2} md={5} className="g-4"> */}
        {item?.results?.map((obj) => (
          <Col   >
            <Card style={{width:"18rem"}}>
              <Card.Img variant="top" src={obj.image} style={{width:"18rem"}} />
              <Card.Body>
                <Card.Title>{obj.name}</Card.Title>
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
