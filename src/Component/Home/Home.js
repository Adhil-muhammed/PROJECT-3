import React from "react";
import Banner from "../Banner/Banner";
import FadeCard from "../FadeCard/FadeCard";
import Footer from "../Footer/Footer";
import Nevbar from "../Nevbar/Nevbar";
import "./Home.css";
function Home() {
  return (
    <div>
      <Nevbar />
      <Banner />
      <div className="Fadecard">
        <FadeCard />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
