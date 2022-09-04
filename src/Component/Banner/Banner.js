import React from "react";
import "./Banner.css";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
function Banner() {
  return (
    <div className="Banner">
      <Card className="bg-dark text-white">
        <Card.Img
          src="https://wallpaperaccess.com/full/2416004.jpg"
          variant="top"
          style={{ height: "30rem" }}
        />
        <Card.ImgOverlay className="ImgOverlay1">
          <Card.Title>Card title</Card.Title>
          <Card.Img className="insideimage" src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          style={{width:"500px"}}
          />
          <div className="ImgOverlay">
            <Card.Text className="text"></Card.Text>
          </div>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default Banner;
