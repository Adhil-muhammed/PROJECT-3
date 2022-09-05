import React from "react";
import Card from "react-bootstrap/Card";

import "./Banner.css";
import Button from "react-bootstrap/Button";
function Banner() {
  return (
    <div className="Banner">
      <Card className="bg-dark text-white">
        <Card.Img
          src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg"
          alt="Card image"
        />
        <Card.ImgOverlay className="ImgOverlay1">
          <div className="disbox">
            <div className="button">
              <Button variant="danger"> About me</Button>
              </div>
              </div>
            
          
          <Card.Title>Card title</Card.Title>
            <div className="discription">Adhil Muhammed</div>

          <div className="ImgOverlay">
            <Card.Text className="text"></Card.Text>
          </div>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default Banner;
