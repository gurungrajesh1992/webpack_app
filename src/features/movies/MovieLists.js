import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAlllists } from "./MovieSlice";
import Accordion from "../common/Accordion";
import MovieTop from "./MovieTop";
import { Container, Row, Col } from "react-bootstrap";

const MovieLists = () => {
  const lists = useSelector(selectAlllists);
  //   console.log(lists);
  let content;

  const orderedLists = lists.slice().sort((a, b) => a.id - b.id);

  content = orderedLists.map((item) => <Accordion key={item.id} item={item} />);
  return (
    <section>
      <MovieTop />
      <Container>
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <div className="contentWrapper">
              {content}
            </div>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    </section>
  );
};

export default MovieLists;
