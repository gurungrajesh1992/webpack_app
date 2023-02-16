import React from "react";
import { useSelector } from "react-redux";
import { selectAllDirectors } from "../directors/DirectorsSlice";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const PopupModal = ({ directorId, handleClick, show }) => {
  const directors = useSelector(selectAllDirectors);

  const director = directors.find((director) => director.id === directorId);
  console.log(director);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClick}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>{director.name}</Modal.Title>
          <Button variant="primary" onClick={handleClick}>
            X
          </Button>
        </Modal.Header>
        <Modal.Body>
          <div className="dirImg">
            <img src={director.prfile_pic} className="square imgItem" alt="" />
          </div>
          <div
            className="accordion__text"
            dangerouslySetInnerHTML={{ __html: director.description }}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PopupModal;
