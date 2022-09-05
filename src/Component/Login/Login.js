import React, { useState, useContext } from "react";
import { Signcontext } from "../CreateContext/context";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom"; 
import "./Login.css";
function Login() {
  const [loginMail, setLoginMail] = useState("");
  const [loginpass, setLoginPass] = useState("");
  const { firebase } = useContext(Signcontext);
  const history = useHistory();
  const Loginhandler = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(loginMail, loginpass)
      .catch((error) => {
        alert(error.message);
      })
      .then(() => {
        alert("Logged");
      })

      .then(() => {
        history.push("/");
      });
  };
  return (
    <div className="background">
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={Loginhandler}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Log in</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                onChange={(e) => {
                  setLoginMail(e.target.value);
                }}
                value={loginMail}
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                onChange={(e) => {
                  setLoginPass(e.target.value);
                }}
                value={loginpass}
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              Forgot <a href="#">password?</a>
            </p>
            <p className="forgot-password text-right mt-2"><Link to="/">Back to home</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
