import { useEffect, useState } from "react";
import Model from "react-modal";
import { Container } from "reactstrap";

import "reactjs-popup/dist/index.css";
import Login from "./forms/Login";
import { Modal, Button } from "react-bootstrap";

export default function Dashboard() {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {localStorage.getItem("token") ? (
        <div>Dashboard page</div>
      ) : (
        <>
          {console.log("susususussus")}
          <Modal show={show}>
            <Modal.Header
              closeButton
              onClick={() => handleClose()}
            ></Modal.Header>
            <Modal.Body>
              <Login handleClose={handleClose} />
            </Modal.Body>
          </Modal>{" "}
        </>
      )}
    </>
  );
}
