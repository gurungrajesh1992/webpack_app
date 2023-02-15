import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h2>Home Page</h2>
      <h4>Rajesh Gurung !!!</h4>
      <p>9811956191</p>
      <p>gurungrajesh1992@gmail.com</p>
      <p>Please click below button to go to Movie List !!!</p>
      <Link to="/movies" className="movie_link">
        <p className="movie_button">Movie List</p>
      </Link>
    </div>
  );
};

export default Home;
