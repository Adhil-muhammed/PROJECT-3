import React, { useContext, useState } from "react";
import "./Signup.css";
import { useHistory } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/esm/Button";
import { Signcontext } from "../CreateContext/context";
import "firebase/auth";
import "firebase/firestore";
function Signup() {
  const history = useHistory();
  const { firebase } = useContext(Signcontext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  // console.log(email)
  // console.log(password)
  const Handler = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.updateProfile({ displayName: username }).then(() => {
          firebase
            .firestore()
            .collection("signingData")
            .add({
              id: result.user.uid,
              Username: username,
              PhoneNumber: phone,
              Password: password,
            })
            .then(() => {
              history.push("/login");
            });
        });
      });
  };

  return (
    <div className="Form">
      <Form className="Formgroup">
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Username
          </Form.Label>
          <Col sm="4">
            <Form.Control
              type="text"
              placeholder="User name..."
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Phone Number
          </Form.Label>
          <Col sm="4">
            <Form.Control
              type="number"
              placeholder="Phone number"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="4">
            <Form.Control
              type="email"
              placeholder="@gmail.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            password
          </Form.Label>
          <Col sm="4">
            <Form.Control
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Col>
        </Form.Group>

        <Button variant="primary" onClick={Handler}>
          Sign up
        </Button>
      </Form>
    </div>
  );
}

export default Signup;
