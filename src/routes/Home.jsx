import React from "react";
import Contact from "../components/Contact";
import "./Home.css";

const arr = new Array(10).fill(0);

const Home = (props) => {
  props.setNav(true);
  // console.log(props)
  return (
    <div className="home">
      <Contact />
      <div className="welcome">
        <h2>WELCOME to</h2>
        <h1>Lily's Art</h1>
        <h1>Space</h1>
      </div>

      <div className="photos">
        {
          arr.map((v, i) => (
            <img className="img" src="https://via.placeholder.com/400" key={i} alt="name-here" />
          ))
        }
      </div>

    </div>
  );
}

export default Home;