import React, { useState } from "react";
import { AppContent, AppSidebar, AppFooter, AppHeader } from "./index";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Login from "../../pages/forms/Login";
import { Modal, Button } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";

const DefaultLayout = () => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  );
};

export default DefaultLayout;
