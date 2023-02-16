import React from "react";
import { useSelector } from "react-redux";
import { selectAllDirectors } from "../directors/DirectorsSlice";

const MovieDirector = ({ DirectorId }) => {
  const directors = useSelector(selectAllDirectors);
  const director = directors.find((director) => director.id === DirectorId);

  return (
    <p className="category">{director ? director.name : "Unknown Director"}</p>
  );
};

export default MovieDirector;
