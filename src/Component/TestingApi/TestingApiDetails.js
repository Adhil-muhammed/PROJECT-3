import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory, Link } from "react-router-dom";
import "./TestingApi.css";
function TestingApiDetails() {
  const { apiId } = useParams();
  const history = useHistory();
  const [demo, setDemo] = useState([]);
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then((respones) => {
      const details = respones?.data?.results?.find(
        (userItem) => userItem.id === parseInt(apiId)
      );
      setDemo(details);
    });
  }, []);
  //   const RedirectTO1 = () => {};
  //   history.push("/testing");
  return (
    <div>
      <div className="demo1">
        <div className="demo">
          <h1>{`Name: ${demo.name}`}</h1>
          <h2>{`species:${demo.species}`}</h2>
          <h3> {`Current Stage:${demo.status}`}</h3>
          <Link to={"/testing"}>
            <button className="bttnLink"> REDIRECTO </button>
          </Link>
        </div>
        <div className="img">
          <img className="mainImage" src={demo.image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default TestingApiDetails;
