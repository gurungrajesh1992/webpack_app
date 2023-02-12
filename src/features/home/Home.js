import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h2>Home Page</h2>
      <h4>Rajesh Gurung !!!</h4>
      <h5>Designed & Developed By : Rajesh Gurung</h5>
      <h6>Please click below button to go to Movie List !!!</h6>
      <Link to="/movies" className="movie_link">
        <p className="movie_button">Movie List</p>
      </Link>
    </div>
  );
};

export default Home;
