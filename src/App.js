import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./features/home/Home";
import MovieLists from "./features/movies/MovieLists";

const App = () => {
  return (
    <div className="wrapper">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movies" element={<MovieLists />} />
          {/* <Home /> */}
        </Routes>
      </Router>
      <ToastContainer autoClose={5000} />
    </div>
  );
};

export default App;
