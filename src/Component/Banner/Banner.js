import React from "react";
import "./Banner.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
function Banner() {
  return (
    <div className="Banner">
      <Card className="bg-dark text-white">
        <Card.Img
          src="https://compass-ssl.microsoft.com/assets/5f/1b/5f1b56a0-4164-4505-a73c-d34ae957cb71.jpg?n=Hero_VP4_1399x525"
          alt="Card image"
        />
        <Card.ImgOverlay className="ImgOverlay1">
          <Card.Title>Card title</Card.Title>
          <div className="ImgOverlay">
            <Card.Text className="text">Adhil muhammed</Card.Text>
          </div>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default Banner;
