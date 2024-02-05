import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

//import routes from "../routes";
import routes from "../../routes";
import { CBreadcrumb, CBreadcrumbItem, CButton } from "@coreui/react";

const AppBreadcrumb = () => {
  const currentLocation = useLocation().pathname;
  // const [token, setToken] = useState(localStorage.getItem("token"));
  const token = localStorage.getItem("token");
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  // }, []);

  const getRouteName = (pathname, routes) => {
    const currentRoute = routes.find((route) => route.path === pathname);
    return currentRoute ? currentRoute.name : false;
  };
  const getBreadcrumbs = (location) => {
    const breadcrumbs = [];
    location.split("/").reduce((prev, curr, index, array) => {
      const currentPathname = `${prev}/${curr}`;
      const routeName = getRouteName(currentPathname, routes);
      routeName &&
        breadcrumbs.push({
          pathname: currentPathname,
          name: routeName,
          active: index + 1 === array.length ? true : false,
        });
      return currentPathname;
    });
    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs(currentLocation);

  const navigate = useNavigate();
  const Logout = () => {
    navigate("/", { replace: true });
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <>
      {console.log("currentLocationcurrentLocation", token)}
      <CBreadcrumb className="m-0 ms-2 d-flex justify-content-end">
        <CBreadcrumbItem href="/">Home</CBreadcrumbItem>
        {breadcrumbs.map((breadcrumb, index) => {
          {
            console.log("breadcrumbbreadcrumb", breadcrumb);
          }
          return (
            <CBreadcrumbItem
              {...(breadcrumb.active
                ? { active: true }
                : { href: breadcrumb.pathname })}
              key={index}
            >
              {breadcrumb.name}
            </CBreadcrumbItem>
          );
        })}
      </CBreadcrumb>
      {/* {token && <CButton onClick={() => Logout()}>Logout</CButton>} */}
      {/* <NavLink to={path.path}>Login</NavLink> */}
    </>
  );
};

export default React.memo(AppBreadcrumb);
