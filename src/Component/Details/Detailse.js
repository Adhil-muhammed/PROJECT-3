import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Details.css"
function Detailse() {
  const [user, setUser] = useState([]);
  const { Userid } = useParams();
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then((response) => {
      const item = response?.data?.results?.find(
        (userItem) => userItem.id === parseInt(Userid)
      );
      setUser(item);
      console.log(item);
    });
  }, [Userid]);
  return (
    <div className="Detsils">
      <div className="cardtls">

      <h2>{`iam:${user.name} `}</h2>
      <br />
      <h2>{`gender:${user.gender} `}</h2>
      <br />
      <h1>THIS IS ME:</h1>
      <img src={`${user.image}`}></img>
      <br />
      <h2>{`iam:${user.species} `}</h2>
      <h2>{ user.type ? `iam:${user.type}` :"type:not specified"}</h2>
      </div>
    </div>
  );
}

export default Detailse;