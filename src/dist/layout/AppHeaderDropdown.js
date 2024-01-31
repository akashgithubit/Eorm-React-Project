// // import React from "react";
// // import {
// //   CAvatar,
// //   CBadge,
// //   CDropdown,
// //   CDropdownDivider,
// //   CDropdownHeader,
// //   CDropdownItem,
// //   CDropdownMenu,
// //   CDropdownToggle,
// // } from "@coreui/react";
// // import {
// //   cilBell,
// //   cilCreditCard,
// //   cilCommentSquare,
// //   cilEnvelopeOpen,
// //   cilFile,
// //   cilLockLocked,
// //   cilSettings,
// //   cilTask,
// //   cilUser,
// // } from "@coreui/icons";
// // import CIcon from "@coreui/icons-react";

// // import avatar8 from "../../assets/images/avatars/8.jpg";
// import React, { useEffect, useState } from "react";
// import {
//   CAvatar,
//   CBadge,
//   CDropdown,
//   CDropdownDivider,
//   CDropdownHeader,
//   CDropdownItem,
//   CDropdownMenu,
//   CDropdownToggle,
//   CButton,
//   CBreadcrumbItem,
//   CTooltip,
//   CLink,
// } from "@coreui/react";
// import {
//   cilBell,
//   cilCreditCard,
//   cilCommentSquare,
//   cilEnvelopeOpen,
//   cilFile,
//   cilLockLocked,
//   cilSettings,
//   cilTask,
//   cilUser,
// } from "@coreui/icons";
// import CIcon from "@coreui/icons-react";
// import avatar8 from "./../../assets/images/avatars/8.jpg";
// //import adminimg from 'src/assets/images/AdminIson.jpeg'
// // import empimg from "src/assets/images/EmpIcon.jpeg";
// // import saleimg from "src/assets/images/sales-management.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faUsers,
//   faUserTie,
//   faFileContract,
//   faListCheck,
//   faClipboardUser,
// } from "@fortawesome/free-solid-svg-icons";
// import "@fortawesome/fontawesome-free/css/all.css";

// // const AppHeaderDropdown = () => {
// //   return (
// //     // <CDropdown variant="nav-item">
// //     //   {/* <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
// //     //     <CAvatar src={avatar8} size="md" />
// //     //   </CDropdownToggle>
// //     //   <CDropdownMenu className="pt-0" placement="bottom-end">
// //     //     <CDropdownHeader className="bg-light fw-semibold py-2">
// //     //       Account
// //     //     </CDropdownHeader>
// //     //     <CDropdownItem href="#">
// //     //       <CIcon icon={cilBell} className="me-2" />
// //     //       Updates
// //     //       <CBadge color="info" className="ms-2">
// //     //         42
// //     //       </CBadge>
// //     //     </CDropdownItem>
// //     //     <CDropdownItem href="#">
// //     //       <CIcon icon={cilEnvelopeOpen} className="me-2" />
// //     //       Messages
// //     //       <CBadge color="success" className="ms-2">
// //     //         42
// //     //       </CBadge>
// //     //     </CDropdownItem>
// //     //     <CDropdownItem href="#">
// //     //       <CIcon icon={cilTask} className="me-2" />
// //     //       Tasks
// //     //       <CBadge color="danger" className="ms-2">
// //     //         42
// //     //       </CBadge>
// //     //     </CDropdownItem>
// //     //     <CDropdownItem href="#">
// //     //       <CIcon icon={cilCommentSquare} className="me-2" />
// //     //       Comments
// //     //       <CBadge color="warning" className="ms-2">
// //     //         42
// //     //       </CBadge>
// //     //     </CDropdownItem>
// //     //     <CDropdownHeader className="bg-light fw-semibold py-2">
// //     //       Settings
// //     //     </CDropdownHeader>
// //     //     <CDropdownItem href="#">
// //     //       <CIcon icon={cilUser} className="me-2" />
// //     //       Profile
// //     //     </CDropdownItem>
// //     //     <CDropdownItem href="#">
// //     //       <CIcon icon={cilSettings} className="me-2" />
// //     //       Settings
// //     //     </CDropdownItem>
// //     //     <CDropdownItem href="#">
// //     //       <CIcon icon={cilCreditCard} className="me-2" />
// //     //       Payments
// //     //       <CBadge color="secondary" className="ms-2">
// //     //         42
// //     //       </CBadge>
// //     //     </CDropdownItem>
// //     //     <CDropdownItem href="#">
// //     //       <CIcon icon={cilFile} className="me-2" />
// //     //       Projects
// //     //       <CBadge color="primary" className="ms-2">
// //     //         42
// //     //       </CBadge>
// //     //     </CDropdownItem>
// //     //     <CDropdownDivider />
// //     //     <CDropdownItem href="#">
// //     //       <CIcon icon={cilLockLocked} className="me-2" />
// //     //       Lock Account
// //     //     </CDropdownItem>
// //     //   </CDropdownMenu> */}
// //     // </CDropdown>

// //   );
// // };

// // export default AppHeaderDropdown;

// const AppHeaderDropdown = () => {
//   const [applicationName, setApplicatonName] = useState([]);
//   const EmployeeIcon = <FontAwesomeIcon icon={faUsers} />;
//   const AdminIcon = <FontAwesomeIcon icon={faUserTie} />;
//   const SaleIcon = <FontAwesomeIcon icon={faFileContract} />;
//   const AdmsIcon = <FontAwesomeIcon icon={faListCheck} />;
//   const TiatIcon = <FontAwesomeIcon icon={faClipboardUser} />;

//   const renderedAvatars = (
//     <div style={{ display: "flex" }}>
//       {applicationName.map((app, index) => (
//         <div key={index} style={{ marginRight: "10px" }}>
//           {app === "ADMIN" ? (
//             <CTooltip content="ADMIN">
//               <span
//                 style={{
//                   color: "grey",
//                   marginRight: "20px",
//                   fontSize: "26px",
//                   cursor: "pointer",
//                 }}
//                 onClick={() => checkRole(app)}
//               >
//                 {AdminIcon}
//               </span>
//             </CTooltip>
//           ) : app === "EORM" ? (
//             <CTooltip content="EORM">
//               <span
//                 style={{
//                   color: "grey",
//                   marginRight: "20px",
//                   fontSize: "26px",
//                   cursor: "pointer",
//                 }}
//                 onClick={() => checkRole(app)}
//               >
//                 {EmployeeIcon}
//               </span>
//             </CTooltip>
//           ) : app === "SALE" ? (
//             <CTooltip content="SALE">
//               <span
//                 style={{
//                   color: "grey",
//                   marginRight: "20px",
//                   fontSize: "26px",
//                   cursor: "pointer",
//                 }}
//                 onClick={() => checkRole(app)}
//               >
//                 {SaleIcon}
//               </span>
//             </CTooltip>
//           ) : app === "ADMS" ? (
//             <CTooltip content="ADMS">
//               <span
//                 style={{
//                   color: "grey",
//                   marginRight: "20px",
//                   fontSize: "26px",
//                   cursor: "pointer",
//                 }}
//                 onClick={() => checkRole(app)}
//               >
//                 {AdmsIcon}
//               </span>
//             </CTooltip>
//           ) : app === "TIAT" ? (
//             <CTooltip content="TIAT">
//               <span
//                 style={{
//                   color: "grey",
//                   marginRight: "20px",
//                   fontSize: "26px",
//                   cursor: "pointer",
//                 }}
//                 onClick={() => checkRole(app)}
//               >
//                 {TiatIcon}
//               </span>
//             </CTooltip>
//           ) : null}
//         </div>
//       ))}
//     </div>
//   );

//   const createEmployee = () => {
//     window.location.href = "http://localhost:3001/#/dashboard";
//   };

//   const checkRole = (app, index) => {
//     console.log("app", app);
//     if (app === "EORM") {
//       window.location.href = "http://localhost:3001/#/dashboard";
//       //   const getResponce =  localStorage.getItem("roleResponce")
//       //   const res = JSON.parse(getResponce)
//       //   const filteredRes = res.filter(item => item.applicationName === "EORM");
//       //   const buttons = applicationName.filter(item => item.applicationName !== "EORM")
//       //   //setApplicatonName(buttons)
//       //  // console.log("choose application",filteredRes)
//       //   if(filteredRes && filteredRes.length > 0 && app === "EORM"){
//       //     localStorage.setItem("filteredAppMenu",JSON.stringify(filteredRes))
//       //     // app.target.disabled = true
//       //    // app.preventDefault();
//       //     setTimeout(() => {
//       //       window.location.reload();
//       //       app.preventDefault();
//       //       app.target.disabled = true
//       //       // window.location.href = "http://localhost:3000/#/dashboard";
//       //     }, 1000);
//       //   }
//     }
//     if (app === "ADMIN") {
//       const getResponce = localStorage.getItem("roleResponce");
//       const res = JSON.parse(getResponce);
//       const filteredRes = res.filter(
//         (item) => item.applicationName === "ADMIN"
//       );
//       const buttons = applicationName.filter(
//         (item) => item.applicationName !== "ADMIN"
//       );
//       //setApplicatonName(buttons)
//       // console.log("choose application",filteredRes)
//       if (filteredRes && filteredRes.length > 0 && app === "ADMIN") {
//         localStorage.setItem("filteredAppMenu", JSON.stringify(filteredRes));
//         // app.target.disabled = true
//         // app.preventDefault();
//         setTimeout(() => {
//           window.location.reload();
//           app.preventDefault();
//           app.target.disabled = true;
//           // window.location.href = "http://localhost:3000/#/dashboard";
//         }, 1000);
//       }
//       // window.location.href = "http://localhost:3000/#/dashboard";
//     }
//     if (app === "SALE") {
//       window.location.href = "http://localhost:3002/#/dashboard";
//     }
//     if (app === "ADMS") {
//       window.location.href = "http://localhost:3003/#/dashboard";
//     }
//     if (app === "TIAT") {
//       window.location.href = "http://localhost:3004/#/dashboard";
//     }
//   };
//   useEffect(() => {
//     const getResponce = localStorage.getItem("roleResponce");
//     const getFilterResponce = localStorage.getItem("filteredAppMenu");
//     let filterResponse = JSON.parse(getFilterResponce);
//     let res = JSON.parse(getResponce);

//     if (filterResponse?.length > 0) {
//       res = res?.filter(
//         (item) => item?.applicationName !== filterResponse?.[0]?.applicationName
//       );
//     }
//     // console.log("role res",JSON.stringify(res,null,2))
//     //const filtered = res.filter((item) => item.applicationName !== "Admin Application");
//     //console.log("filtered",filtered)
//     const uniqueObjects = [
//       ...new Map(res?.map((item) => [item?.applicationId, item])).values(),
//     ];

//     const filteredApplications = uniqueObjects?.map(
//       (item) => item?.applicationName
//     );

//     setApplicatonName(filteredApplications);
//   }, []);
//   return (
//     <>
//       <>
//         <div style={{ display: "flex", alignItems: "center" }}>
//           {applicationName?.length > 0 ? (
//             <div style={{ marginRight: "20px" }}>
//               <CBreadcrumbItem>{renderedAvatars}</CBreadcrumbItem>
//             </div>
//           ) : (
//             <></>
//             // <div onClick={createEmployee} style={{ cursor: 'pointer',color:"grey",marginRight:"20px",fontSize:"26px"}}>
//             //   <CTooltip content="Create Employee">
//             //     {EmployeeIcon}
//             //   </CTooltip>
//             // </div>
//           )}
//           <CAvatar src={avatar8} size="md" />
//         </div>
//       </>
//       <CDropdown variant="nav-item">
//         <CDropdownToggle
//           placement="bottom-end"
//           className="py-0 mr-5"
//           caret={false}
//         ></CDropdownToggle>
//         {/* <CDropdownMenu className="pt-0" placement="bottom-end">
//           <CDropdownHeader className="bg-light fw-semibold py-2">
//             Account
//           </CDropdownHeader>
//           <CDropdownItem href="#">
//             <CIcon icon={cilBell} className="me-2" />
//             Updates
//             <CBadge color="info" className="ms-2">
//               42
//             </CBadge>
//           </CDropdownItem>
//           <CDropdownItem href="#">
//             <CIcon icon={cilEnvelopeOpen} className="me-2" />
//             Messages
//             <CBadge color="success" className="ms-2">
//               42
//             </CBadge>
//           </CDropdownItem>
//           <CDropdownItem href="#">
//             <CIcon icon={cilTask} className="me-2" />
//             Tasks
//             <CBadge color="danger" className="ms-2">
//               42
//             </CBadge>
//           </CDropdownItem>
//           <CDropdownItem href="#">
//             <CIcon icon={cilCommentSquare} className="me-2" />
//             Comments
//             <CBadge color="warning" className="ms-2">
//               42
//             </CBadge>
//           </CDropdownItem>
//           <CDropdownHeader className="bg-light fw-semibold py-2">
//             Settings
//           </CDropdownHeader>
//           <CDropdownItem href="#">
//             <CIcon icon={cilUser} className="me-2" />
//             Profile
//           </CDropdownItem>
//           <CDropdownItem href="#">
//             <CIcon icon={cilSettings} className="me-2" />
//             Settings
//           </CDropdownItem>
//           <CDropdownItem href="#">
//             <CIcon icon={cilCreditCard} className="me-2" />
//             Payments
//             <CBadge color="secondary" className="ms-2">
//               42
//             </CBadge>
//           </CDropdownItem>
//           <CDropdownItem href="#">
//             <CIcon icon={cilFile} className="me-2" />
//             Projects
//             <CBadge color="primary" className="ms-2">
//               42
//             </CBadge>
//           </CDropdownItem>
//           <CDropdownDivider />
//           <CDropdownItem href="#">
//             <CIcon icon={cilLockLocked} className="me-2" />
//             Lock Account
//           </CDropdownItem>
//         </CDropdownMenu> */}
//       </CDropdown>
//     </>
//   );
// };

// export default AppHeaderDropdown;

import React, { useEffect, useState } from "react";
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CButton,
  CBreadcrumbItem,
  CTooltip,
  CLink,
} from "@coreui/react";
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
} from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import avatar8 from "./../../assets/images/avatars/8.jpg";
//import adminimg from 'src/assets/images/AdminIson.jpeg'
// import empimg from "src/assets/images/EmpIcon.jpeg";
// import saleimg from "src/assets/images/sales-management.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faUserTie,
  faFileContract,
  faListCheck,
  faClipboardUser,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.css";

const AppHeaderDropdown = () => {
  const [applicationName, setApplicatonName] = useState([]);
  const EmployeeIcon = <FontAwesomeIcon icon={faUsers} />;
  const AdminIcon = <FontAwesomeIcon icon={faUserTie} />;
  const SaleIcon = <FontAwesomeIcon icon={faFileContract} />;
  const AdmsIcon = <FontAwesomeIcon icon={faListCheck} />;
  const TiatIcon = <FontAwesomeIcon icon={faClipboardUser} />;

  const renderedAvatars = (
    <div style={{ display: "flex" }}>
      {applicationName.map((app, index) => (
        <div key={index} style={{ marginRight: "10px" }}>
          {app === "ADMIN" ? (
            <CTooltip content="ADMIN">
              <span
                style={{
                  color: "grey",
                  marginRight: "20px",
                  fontSize: "26px",
                  cursor: "pointer",
                }}
                onClick={() => checkRole(app)}
              >
                {AdminIcon}
              </span>
            </CTooltip>
          ) : app === "EORM" ? (
            <CTooltip content="EORM">
              <span
                style={{
                  color: "grey",
                  marginRight: "20px",
                  fontSize: "26px",
                  cursor: "pointer",
                }}
                onClick={() => checkRole(app)}
              >
                {EmployeeIcon}
              </span>
            </CTooltip>
          ) : app === "SALE" ? (
            <CTooltip content="SALE">
              <span
                style={{
                  color: "grey",
                  marginRight: "20px",
                  fontSize: "26px",
                  cursor: "pointer",
                }}
                onClick={() => checkRole(app)}
              >
                {SaleIcon}
              </span>
            </CTooltip>
          ) : app === "ADMS" ? (
            <CTooltip content="ADMS">
              <span
                style={{
                  color: "grey",
                  marginRight: "20px",
                  fontSize: "26px",
                  cursor: "pointer",
                }}
                onClick={() => checkRole(app)}
              >
                {AdmsIcon}
              </span>
            </CTooltip>
          ) : app === "TIAT" ? (
            <CTooltip content="TIAT">
              <span
                style={{
                  color: "grey",
                  marginRight: "20px",
                  fontSize: "26px",
                  cursor: "pointer",
                }}
                onClick={() => checkRole(app)}
              >
                {TiatIcon}
              </span>
            </CTooltip>
          ) : null}
        </div>
      ))}
    </div>
  );

  const createEmployee = () => {
    window.location.href = "http://localhost:3001/#/dashboard";
  };

  const checkRole = (app, index) => {
    console.log("app", app);
    if (app === "EORM") {
      window.location.href = "http://localhost:3001/#/dashboard";
      //   const getResponce =  localStorage.getItem("roleResponce")
      //   const res = JSON.parse(getResponce)
      //   const filteredRes = res.filter(item => item.applicationName === "EORM");
      //   const buttons = applicationName.filter(item => item.applicationName !== "EORM")
      //   //setApplicatonName(buttons)
      //  // console.log("choose application",filteredRes)
      //   if(filteredRes && filteredRes.length > 0 && app === "EORM"){
      //     localStorage.setItem("filteredAppMenu",JSON.stringify(filteredRes))
      //     // app.target.disabled = true
      //    // app.preventDefault();
      //     setTimeout(() => {
      //       window.location.reload();
      //       app.preventDefault();
      //       app.target.disabled = true
      //       // window.location.href = "http://localhost:3000/#/dashboard";
      //     }, 1000);
      //   }
    }
    if (app === "ADMIN") {
      const getResponce = localStorage.getItem("roleResponce");
      const res = JSON.parse(getResponce);
      const filteredRes = res.filter(
        (item) => item.applicationName === "ADMIN"
      );
      const buttons = applicationName.filter(
        (item) => item.applicationName !== "ADMIN"
      );
      //setApplicatonName(buttons)
      // console.log("choose application",filteredRes)
      if (filteredRes && filteredRes.length > 0 && app === "ADMIN") {
        localStorage.setItem("filteredAppMenu", JSON.stringify(filteredRes));
        // app.target.disabled = true
        // app.preventDefault();
        setTimeout(() => {
          window.location.reload();
          app.preventDefault();
          app.target.disabled = true;
          // window.location.href = "http://localhost:3000/#/dashboard";
        }, 1000);
      }
      // window.location.href = "http://localhost:3000/#/dashboard";
    }
    if (app === "SALE") {
      window.location.href = "http://localhost:3002/#/dashboard";
    }
    if (app === "ADMS") {
      window.location.href = "http://localhost:3003/#/dashboard";
    }
    if (app === "TIAT") {
      window.location.href = "http://localhost:3004/#/dashboard";
    }
  };
  useEffect(() => {
    const getResponce = localStorage.getItem("roleResponce");
    const getFilterResponce = localStorage.getItem("filteredAppMenu");
    let filterResponse = JSON.parse(getFilterResponce);
    let res = JSON.parse(getResponce);

    if (filterResponse?.length > 0) {
      res = res?.filter(
        (item) => item?.applicationName !== filterResponse?.[0]?.applicationName
      );
    }
    // console.log("role res",JSON.stringify(res,null,2))
    //const filtered = res.filter((item) => item.applicationName !== "Admin Application");
    //console.log("filtered",filtered)
    const uniqueObjects = [
      ...new Map(res?.map((item) => [item?.applicationId, item])).values(),
    ];

    const filteredApplications = uniqueObjects?.map(
      (item) => item?.applicationName
    );

    setApplicatonName(filteredApplications);
  }, []);
  return (
    <>
      <>
        <div style={{ display: "flex", alignItems: "center" }}>
          {applicationName?.length > 0 ? (
            <div style={{ marginRight: "20px" }}>
              <CBreadcrumbItem>{renderedAvatars}</CBreadcrumbItem>
            </div>
          ) : (
            <></>
            // <div onClick={createEmployee} style={{ cursor: 'pointer',color:"grey",marginRight:"20px",fontSize:"26px"}}>
            //   <CTooltip content="Create Employee">
            //     {EmployeeIcon}
            //   </CTooltip>
            // </div>
          )}
          <CAvatar src={avatar8} size="md" />
        </div>
      </>
      {/* <CDropdown variant="nav-item">
        <CDropdownToggle
          placement="bottom-end"
          className="py-0 mr-5"
          caret={false}
        ></CDropdownToggle>
        <CDropdownMenu className="pt-0" placement="bottom-end">
          <CDropdownHeader className="bg-light fw-semibold py-2">
            Account
          </CDropdownHeader>
          <CDropdownItem href="#">
            <CIcon icon={cilBell} className="me-2" />
            Updates
            <CBadge color="info" className="ms-2">
              42
            </CBadge>
          </CDropdownItem>
          <CDropdownItem href="#">
            <CIcon icon={cilEnvelopeOpen} className="me-2" />
            Messages
            <CBadge color="success" className="ms-2">
              42
            </CBadge>
          </CDropdownItem>
          <CDropdownItem href="#">
            <CIcon icon={cilTask} className="me-2" />
            Tasks
            <CBadge color="danger" className="ms-2">
              42
            </CBadge>
          </CDropdownItem>
          <CDropdownItem href="#">
            <CIcon icon={cilCommentSquare} className="me-2" />
            Comments
            <CBadge color="warning" className="ms-2">
              42
            </CBadge>
          </CDropdownItem>
          <CDropdownHeader className="bg-light fw-semibold py-2">
            Settings
          </CDropdownHeader>
          <CDropdownItem href="#">
            <CIcon icon={cilUser} className="me-2" />
            Profile
          </CDropdownItem>
          <CDropdownItem href="#">
            <CIcon icon={cilSettings} className="me-2" />
            Settings
          </CDropdownItem>
          <CDropdownItem href="#">
            <CIcon icon={cilCreditCard} className="me-2" />
            Payments
            <CBadge color="secondary" className="ms-2">
              42
            </CBadge>
          </CDropdownItem>
          <CDropdownItem href="#">
            <CIcon icon={cilFile} className="me-2" />
            Projects
            <CBadge color="primary" className="ms-2">
              42
            </CBadge>
          </CDropdownItem>
          <CDropdownDivider />
          <CDropdownItem href="#">
            <CIcon icon={cilLockLocked} className="me-2" />
            Lock Account
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown> */}
    </>
  );
};

export default AppHeaderDropdown;
