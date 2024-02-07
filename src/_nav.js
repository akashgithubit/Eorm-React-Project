import React, { useState } from "react";
import CIcon from "@coreui/icons-react";
import {
  cilGridSlash,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilAssistiveListeningSystem,
  cilUser,
  cilSearch,
  cibHackhands,
  cilList,
  cilTask,
  cilCalendar,
  cilVector,
  cilSettings,
  cibR,
  cilLevelUp,
} from "@coreui/icons";
import { CNavGroup, CNavItem, CNavTitle } from "@coreui/react";
//import {  accessFunctionNew } from './api/apiConfig'
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { BsCalendarEvent, BsPersonBadge, BsBuilding } from "react-icons/bs";
import {
  FaCodepen,
  FaPeopleArrows,
  FaBusinessTime,
  FaUsers,
  FaFileContract,
  FaSearch,
} from "react-icons/fa";
import {
  MdDesignServices,
  MdOutlineSettingsInputComponent,
  MdOutlineHolidayVillage,
} from "react-icons/md";
import { RiUserSettingsFill, RiFileEditFill } from "react-icons/ri";
import { GrDocumentStore } from "react-icons/gr";

const getToken = localStorage.getItem("AccessToken");
const response = localStorage.getItem("response");
const roleResponse = localStorage.getItem("filteredAppMenu");
const roleAccess = JSON.parse(roleResponse);
const parsedResponse = JSON.parse(response);
const roleLinkingMappingResponse =
  parsedResponse?.data?.roleLinkMappingResponse;

console.log("rolelink Mpping", JSON.stringify(roleLinkingMappingResponse));
console.log("role Responce", JSON.stringify(roleResponse));

const accessItems = roleAccess?.map((item) => {
  return item.accessItem;
});
//  console.log("access item",accessItems)

const _nav = [
  {
    component: CNavItem,
    name: "Dashboard",
    to: "/",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    component: CNavGroup,
    name: 'Organisation Structure',
    icon: <FaBusinessTime className="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Branch',
        to: '/resource/EmployeeForm',
      },
      {
        component: CNavItem,
        name: 'Department',
        to: '/resourse/designation',
      },
      {
        component: CNavItem,
        name: 'Designation',
        to: '/resourse/department',
      },
     
    ]
  },
  {
    component: CNavGroup,
    name: 'Employee Management',
    icon: <FaUsers className="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Employee Form',
        to: '/resource/EmployeeForm',
      },
      {
        component: CNavItem,
        name: 'Searh Employee',
        to: '/resourse/designation',
      },     
    ]
  },
];
const showAllNav = [
  {
    component: CNavItem,
    name: "Dashboard",
    to: "/",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    component: CNavGroup,
    name: 'Organisation Structure',
    icon: <FaBusinessTime className="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Branch',
        to: '/resource/EmployeeForm',
      },
      {
        component: CNavItem,
        name: 'Department',
        to: '/resourse/designation',
      },
      {
        component: CNavItem,
        name: 'Designation',
        to: '/resourse/department',
      },
     
    ]
  },
  {
    component: CNavGroup,
    name: 'Employee Management',
    icon: <FaUsers className="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Employee Form',
        to: '/resource/EmployeeForm',
      },
      {
        component: CNavItem,
        name: 'Searh Employee',
        to: '/resourse/designation',
      },     
    ]
  },
];
const listNav = [
  {
    component: CNavItem,
    name: "Dashboard",
    to: "/",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    component: CNavGroup,
    name: 'Organisation Structure',
    icon: <FaBusinessTime className="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Branch',
        to: '/resource/EmployeeForm',
      },
      {
        component: CNavItem,
        name: 'Department',
        to: '/resourse/designation',
      },
      {
        component: CNavItem,
        name: 'Designation',
        to: '/resourse/department',
      },
     
    ]
  },
  {
    component: CNavGroup,
    name: 'Employee Management',
    icon: <FaUsers className="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Employee Form',
        to: '/resource/EmployeeForm',
      },
      {
        component: CNavItem,
        name: 'Searh Employee',
        to: '/resourse/designation',
      },     
    ]
  },
];

const isParentExist = (name) => {
  console.log("name in parentExit", name);
  const data = accessItems?.find((item) => item.AccessItemName == name);
  console.log("data api");
  if (data) {
    return true;
  }
  return false;
};

const getChild = (item) => {
  const tempData = item;
  console.log("items", item);
  const tempItems = [];
  // const accessItemsChild = roleLinkingMappingResponse?.map(item => {
  //   console.log("item loades--------",item)
  //   return item;
  // });
  const accessItemsChild = roleLinkingMappingResponse?.find(
    (data) => data.accessItem.AccessItemName == item?.name
  );

  tempData?.items?.forEach((item) => {
    if (
      accessItemsChild?.subAccessItems?.SubAccessItemName.includes(item?.name)
    ) {
      tempItems.push(item);
    }
  });
  tempData.items = tempItems;
  console.log("temp data", tempData);
  _nav.push(tempData);
  console.log("nav", _nav);
};

listNav.forEach((item) => {
  if (isParentExist(item.name)) {
    getChild(item);
  }
});

console.log("nav ------", _nav);

// export default _nav
//console.log("rolelink Mpping",JSON.stringify(roleLinkingMappingResponse))
const navBar =
  roleAccess?.length > 0 || roleLinkingMappingResponse?.length > 0
    ? _nav
    : showAllNav;
// const navBar =
//   roleAccess?.length >0 && roleLinkingMappingResponse?.length >0
//     ? _nav
//     : showAllNav;
export default navBar;
