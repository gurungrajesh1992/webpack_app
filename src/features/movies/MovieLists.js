import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectAlllists } from "./MovieSlice";

import MovieTop from "./MovieTop";
import Excerpt from "./Excerpt";

const MovieLists = () => {
  const lists = useSelector(selectAlllists);
  //   console.log(lists);
  let content;

  const orderedLists = lists.slice().sort((a, b) => a.id - b.id);

  content = orderedLists.map((item) => <Excerpt key={item.id} item={item} />);
  return (
    <section>
      <MovieTop />
      <Container>
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <div className="contentWrapper">{content}</div>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    </section>
  );
};

export default MovieLists;
