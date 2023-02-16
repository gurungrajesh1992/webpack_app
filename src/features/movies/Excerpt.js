import React from "react";
import { useState, useRef } from "react";
import { Col, Row } from "react-bootstrap";

import "../../css/Accordion.css";

import { Toast, ServicesOne } from "../common/Toast";
import CommonButton from "../common/CommonButton";
import MovieDirector from "./MovieDirector";
import MovieCategory from "./MovieCategory";
import PopupModal from "./PopupModal";

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

  const addToWish = () => {
    const promise = new Promise(function (resolve, reject) {
      // call resolve if the method succeeds
      setTimeout(function () {
        const didSucceed = Math.random();
        // console.log(Math.random());
        if (didSucceed > 0.5) {
          resolve("Success");
        } else {
          reject("Error");
        }
      }, 1000);
    });
    // ServicesOne(`Movie Added`)
    promise.then(
      (result) => {
        console.log(result);
        ServicesOne(`${item.title} Movie Added`);
      },
      (error) => {
        console.log(error);
        ServicesOne(`Unable To Add Movie`);
      }
    );
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
                <PopupModal
                  directorId={item.director_id}
                  handleClick={handleClose}
                  show={show}
                />
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
          {/* ServicesOne(`${item.title} Movie Added`) */}
          <CommonButton handleClick={addToWish} text={`Add to Wish`} />
        </div>
      </div>
    </div>
  );
};

export default Excerpt;
