import React from "react";
import homeImg from "../../assets/homeImg.svg";
import "./Home.css";

function Home() {
  return (
    <div className="container home-content">
      <div className="row">
        <div className="col-6 home-flex">
          <h1>
            Hi, I'm <span> Nixon Varghese </span>
          </h1>

          <h4>
            Full Stack Developer <hr />
          </h4>

          <p>This is a Responsive Navbar page</p>
        </div>

        <div className="col-6 home-flex">
          <img src={homeImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
