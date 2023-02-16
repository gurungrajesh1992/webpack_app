import React from "react";
import { useSelector } from "react-redux";
import { selectAllDirectors } from "../directors/DirectorsSlice";

const MovieDirector = ({ handleClick, directorId }) => {
  const directors = useSelector(selectAllDirectors);
  // console.log(directors);
  const director = directors.find((director) => director.id === directorId);
  return (
    <p className="director" variant="primary" onClick={handleClick}>
      {director ? director.name : "Unknown Director"}
    </p>
  );
};

export default MovieDirector;
