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
    <div className="accordion__section">
      <button className={`accordion ${active}`} onClick={toggleAccordion}>
        <p className="accordion__title">{item.title}</p>
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
      </div>
    </div>
  );
};

export default Accordion;
