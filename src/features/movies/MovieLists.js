import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAlllists } from "./MovieSlice";
import Accordion from "../common/Accordion";
import { Container, Row, Col } from "react-bootstrap";

const MovieLists = () => {
  const lists = useSelector(selectAlllists);
  //   console.log(lists);
  let content;

  const orderedLists = lists.slice().sort((a, b) => a.id - b.id);

  content = orderedLists.map((item) => <Accordion key={item.id} item={item} />);
  return (
    <section>
      <Container>
        <Row>
          <Col md={3}>xs=12 md=8</Col>
          <Col md={6}>
            <h2>Movie List</h2>
            <Link to="/">
              <p>Home</p>
            </Link>
          </Col>
          <Col md={3}>xs=6 md=4</Col>
        </Row>
      </Container>
      {content}
    </section>
  );
};

export default MovieLists;
