import React from "react";
import Card from "react-bootstrap/Card";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import "./Banner.css";
function Banner() {
  return (
    <div>
      <ThemeProvider
        breakpoints={["xxl", "xl", "lg", "md", "sm", "xs"]}
        minBreakpoint="md"
      >

      <Card>
        <Card.Img className=" img-fluid"variant="top" src="https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg" />
        <Card.ImgOverlay>
          <Card.Text className="Discription">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      </ThemeProvider>
      
      
    </div>
  );
}

export default Banner;
