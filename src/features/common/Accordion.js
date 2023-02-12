import React from "react";
import { useState, useRef } from "react";

import "../../css/Accordion.css";

const Accordion = ({ item }) => {
  const [active, setActive] = useState("");
  const [height, setHeight] = useState("0px");

  const content = useRef(null);

  const toggleAccordion = () => {
    setActive(active === "" ? "active" : "");

    setHeight(
      active === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
  };
  return (
    <div className="container">
      <div className="accordion__section">
        <button className={`accordion ${active}`} onClick={toggleAccordion}>
          <div className="image"><img src={item.image} className="square" alt="" /></div>
          <div className="text">
            <p className="accordion__title">{item.title}</p>
            <p className="category">{item.category_id}</p>
            <p className="director">{item.director_id}</p>
          </div>
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
          <button>
            Add to wish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
