import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./TAP.css"
function TestingApi() {
  const [item, setItem] = useState([]);
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then((response) => {
      setItem(response.data.results);
      console.log(item)
    });
  }, []);
  return (
    <div>
      {item.map((obj) => (
        <div className="main Body">
            <div className="img Body">

          <img  src={obj.image} alt="" />
            </div>
          <Link to={`/apiDetails/${obj.id}`}>
            <h1>{obj.name}</h1>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default TestingApi;
