import Home from "./Component/Home/Home";
import React, { useEffect, useContext } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import FadeCard from "./Component/FadeCard/FadeCard";
import Signup from "./Component/Signup/Signup";
import { PassContext } from "./Component/CreateContext/context";
function App() {
  const { setData ,data} = useContext(PassContext);
  useEffect(() => {
    
console.log(data)
  }, []);
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
      </BrowserRouter>
    </div>
  );
}
export default App;
