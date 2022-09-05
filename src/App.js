import Home from "./Component/Home/Home";
import React, { useEffect, useContext } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import FadeCard from "./Component/FadeCard/FadeCard";
import Signup from "./Component/Signup/Signup";
import { PassContext } from "./Component/CreateContext/context";
import { Signcontext } from "./Component/CreateContext/context";
import Login from "./Component/Login/Login";
import 'firebase/auth'
function App() {
  const { setData } = useContext(PassContext);
  const { firebase } = useContext(Signcontext);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setData(user);
    });
  });
  return (
    <div>
      <BrowserRouter>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route path={"/card"}>
          <FadeCard />
        </Route>
        <Route path={"/singup"}>
          <Signup />
        </Route>
        <Route path={"/login"}>
          <Login />
        </Route>
      </BrowserRouter>
    </div>
  );
}
export default App;
