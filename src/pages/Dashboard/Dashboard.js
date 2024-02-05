import React, { useEffect, useState } from "react";
import Carousal from "./Carousal";
import TopMinCard from "../../dist/common/TopMiniCard";
import PolicyLinks from "./PolicyLinks";
import Login from "../forms/Login";
import { Modal, Button } from "react-bootstrap";
import { CCard, CCol, CContainer, CRow, CCardBody } from "@coreui/react";
const Dashboard = () => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    // <>
    //   <div>
    //     <CCard>
    //       <CCardBody>
    //         <Carousal />
    //         <TopMinCard />
    //       </CCardBody>
    //     </CCard>
    //   </div>
    // </>
    <>
      {localStorage.getItem("token") ? (
        // <div>Dashboard page</div>
        <div>
          <CCard>
            <CCardBody>
              <Carousal />
              <TopMinCard />
            </CCardBody>
          </CCard>
        </div>
      ) : (
        <>
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
};

export default Dashboard;
