import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import Home from "./features/home/Home";
import MovieLists from "./features/movies/MovieLists";

const App = () => {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movies" element={<MovieLists />} />
          {/* <Home /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
