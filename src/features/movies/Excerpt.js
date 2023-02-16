import React from "react";
import { useState, useRef } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "../../css/Accordion.css";

import { Toast, ServicesOne } from "../common/Toast";
import CommonButton from "../common/CommonButton";
import MovieDirector from "./MovieDirector";
import MovieCategory from "./MovieCategory";

const Excerpt = ({ item }) => {
  const [active, setActive] = useState("");
  const [height, setHeight] = useState("0px");
  const [show, setShow] = useState(false);

  const content = useRef(null);

  const toggleAccordion = () => {
    setActive(active === "" ? "active" : "");

    setHeight(
      active === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setShow(false);
  };
  const handleShow = (e) => {
    e.stopPropagation();
    setShow(true);
  };
  return (
    <div className="container">
      <div className="accordion__section">
        <button className={`accordion ${active}`} onClick={toggleAccordion}>
          <Row>
            <Col md={6}>
              <img src={item.image} className="square imgItem" alt="" />
            </Col>
            <Col md={6}>
              <div className="text">
                <h1 className="accordion__title">{item.title}</h1>

                <MovieCategory categoryId={item.category_id} />
                <MovieDirector
                  handleClick={handleShow}
                  directorId={item.director_id}
                />
                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header>
                    <Modal.Title>{item.director_id}</Modal.Title>
                    <Button variant="primary" onClick={handleClose}>
                      X
                    </Button>
                  </Modal.Header>
                  <Modal.Body>
                    Woohoo, you're reading this text in a modal!
                  </Modal.Body>
                </Modal>
              </div>
            </Col>
          </Row>
        </button>
        <div
          ref={content}
          style={{ maxHeight: `${height}` }}
          className="accordion__content"
        >
          <div
            className="accordion__text"
            dangerouslySetInnerHTML={{ __html: item.content }}
          />
          {/* <button className="buttonadd btn btn-sm btn-primary" onClick={ServicesOne()}>
            Add to wish
          </button> */}
          <CommonButton handleClick={ServicesOne()} text={"Add to Wish"} />
          <Toast />
        </div>
      </div>
    </div>
  );
};

export default Excerpt;
