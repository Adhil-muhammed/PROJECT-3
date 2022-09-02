import React from "react";
import "./Signup.css";
import { useHistory } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/esm/Button";
function Signup() {
  const history = useHistory();
  return (
    <div>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="4">
            <Form.Control type="email" placeholder="@gmail.com" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="4">
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
      </Form>
      <Button
        onClick={() => {
          history.push("/");
        }}
        variant="success"
      >
        Success
      </Button>
    </div>
  );
}

export default Signup;
