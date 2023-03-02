import React from "react";
import bg from "../assets/bg.jpg";
import Product from "./Product";
const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="card text-bg-dark border-0">
          <img src={bg} className="card-img" alt="..." height={"550px"} />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <h5 className="card-title">Cart is ready </h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small>Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <Product />
      </div>
    </>
  );
};

export default Home;
