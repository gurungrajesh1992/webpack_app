import React from "react";
import { useSelector } from "react-redux";
import { selectAlllists } from "./MovieSlice";
import Accordion from "../common/Accordion";

const MovieLists = () => {
  const lists = useSelector(selectAlllists);
  //   console.log(lists);
  let content;

  const orderedLists = lists.slice().sort((a, b) => a.id - b.id);

  content = orderedLists.map((item) => <Accordion key={item.id} item={item} />);
  return (
    <section>
      <h2>Movie List</h2>
      {content}
    </section>
  );
};

export default MovieLists;
