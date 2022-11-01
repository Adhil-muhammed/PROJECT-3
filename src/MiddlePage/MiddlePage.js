import React from "react";

import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import "./MiddlePage.css";
function MiddlePage() {
  const medicare = () => {
    <a href="http://www.kmscl.kerala.gov.in/">click</a>;
  };
  return (
    <div>
      <Container>
        <Row xs={1} md={2}>
          <Carousel>
            <Carousel.Item onClick={medicare}>
              <img
                className=" img-fluid"
                // className="d-block w-100"
                src="https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label 1</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                // className="d-block w-100"
                className=" img-fluid"
                src="https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label 2</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                // className="d-block w-100"
                // className="Carousel"
                className=" img-fluid"
                src="https://images.pexels.com/photos/4546132/pexels-photo-4546132.jpeg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label 3</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          <img
            className=" img-fluid"
            src="https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </Row>
      </Container>
    </div>
  );
}

export default MiddlePage;
