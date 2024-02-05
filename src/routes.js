import React from "react";

const Login = React.lazy(() => import("./pages/forms/Login"));
const Dashboard = React.lazy(() => import("./pages/Dashboard/Dashboard"));
const Profilepage = React.lazy(() => import("./pages/forms/Profilepage"));

// Icons
const CoreUIIcons = React.lazy(() =>
  import("./dist/icons/coreui-icons/CoreUIIcons")
);
const Flags = React.lazy(() => import("./dist/icons/flags/Flags"));
const Brands = React.lazy(() => import("./dist/icons/brands/Brands"));

const routes = [
  { path: "/", exact: true, name: "Dashboard", element: Dashboard },
  { path: "/icons/coreui-icons", name: "CoreUI Icons", element: CoreUIIcons },
  // { path: "*", element: Dashboard },

  { path: "/icons/flags", name: "Flags", element: Flags },
  { path: "/icons/brands", name: "Brands", element: Brands },
  // { path: '/dashbord', name: 'Dashboard', element: Dashboard },
  { path: "/login", name: "Login", element: Login },
  { path: "/Profilepage", name: "Profilepage", element: Profilepage },
  //  { path: '/home', name: 'Home', element: Home }
];
export default routes;
