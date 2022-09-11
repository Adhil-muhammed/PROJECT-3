import React from "react";
import Card from "react-bootstrap/Card";

import "./Banner.css";
function Banner() {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src="https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg" />
        <Card.ImgOverlay>
          <Card.Text className="Discription">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      
      
    </div>
  );
}

export default Banner;
