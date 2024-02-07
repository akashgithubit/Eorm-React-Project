import React, { Suspense, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { CContainer, CSpinner } from "@coreui/react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import { Link } from "react-router-dom";
import { redirect } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Login from "../../pages/forms/Login";
// import Dashboard from "../../pages/Dashboard";
import Dashboard from "../../pages/dashboard/Dashboard";
// routes config
import routes from "../../routes";

const AppContent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [value, setvalue] = useState(true);

  const token = localStorage.getItem("token");

  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={true}
                  name={route.name}
                  // element={<route.element />}
                  element={token ? <route.element /> : <Dashboard />}
                />
              )
            );
          })}

          {/* <Navigate replace to="/successfully-submitted" /> */}
          {/* <Route path="*" element={<Navigate to="/" replace />} /> */}

          {/* <Route path="/" element={<Navigate to="dashboard" replace />} /> */}
        </Routes>
      </Suspense>
    </CContainer>
  );
};

export default React.memo(AppContent);
