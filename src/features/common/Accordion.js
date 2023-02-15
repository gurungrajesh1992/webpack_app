import React from "react";
import { useState, useRef } from "react";
import { Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import "../../css/Accordion.css";

import { Toast, ServicesOne } from "./Toast";
import CommonButton from "./CommonButton";

const Accordion = ({ item }) => {
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
  }
  const handleShow = (e) => {
    e.stopPropagation();
    setShow(true);
  }
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
                <p className="category">{item.category_id}</p>
                <p className="director" variant="primary" onClick={handleShow}>{item.director_id}</p>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header>
                    <Modal.Title>{item.director_id}</Modal.Title>
                    <Button variant="primary" onClick={handleClose}>
                      X
                    </Button>
                  </Modal.Header>
                  <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                  {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer> */}
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
          <CommonButton handleClick={ServicesOne()} text={'Add to Wish'}>
            Add to Wish
          </CommonButton>
          <Toast />
        </div>
      </div>
    </div>
  );
};

export default Accordion;
