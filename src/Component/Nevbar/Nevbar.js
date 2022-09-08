import React, { useContext } from "react";
import { PassContext, Signcontext } from "../CreateContext/context";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Nevbar.css";
// import Button from "react-bootstrap/esm/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "firebase/auth";
// import {PassContext} from "../CreateContext/context"
// import {BrowserRouter,Link} from "react-router-dom"
function Nevbar() {
  const { data } = useContext(PassContext);
  const { firebase } = useContext(Signcontext);
  const Loginhandler = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("loge out .....");
      });
  };
  return (
    <div>
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="nevbox"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            HOME
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/card">                                    
                Cards
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Pricing
              </Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/singup">
                SignUP
              </Nav.Link>
              <Nav.Link>
                {data ? `Welcome Mr:${data.displayName}` : " "}
              </Nav.Link>
              <Nav.Link as={Button} variant="dark" onClick={Loginhandler}>
                Log Out
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Nevbar;
