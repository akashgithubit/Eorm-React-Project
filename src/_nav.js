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
    to: "/dashboard",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  // {
  //   component: CNavItem,
  //   name: 'Role Link Access',
  //   to: '/accessControl/RoleLinkAccess',
  // },
  // {
  //         component: CNavItem,
  //         name: 'Access Items',
  //         to: '/masters/accessitems',

  //       },
  // {
  //   component: CNavItem,
  //   name: 'Access Items',
  //   to: '/masters/accessitems',

  // },
  // {
  //   component: CNavItem,
  //   name: 'Role Link Access',
  //   to: '/accessControl/RoleLinkAccess',

  // },
  // {
  //   component: CNavItem,
  //   name: 'Role Action Access',
  //   to: '/accessControl/RoleActionAccess',
  // },
  // {
  //   component: CNavItem,
  //   name: 'Main Page',
  //   to: '/mainpage',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  // },

  // {
  //   component: CNavTitle,
  //   name: 'Menu',
  // },

  //accessFunctionNew('Company', 'create') || accessFunctionNew('Department', 'create') || accessFunctionNew('Designation', 'create') ?
  // accessFunctionNew('Department', 'create') ?
];
const showAllNav = [
  {
    component: CNavItem,
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    component: CNavGroup,
    name: "Masters",
    to: "/masters",
    icon: <RiUserSettingsFill className="nav-icon" />,
    items: [
      // {
      //   component: CNavItem,
      //   name: accessFunctionNew('Company', 'create') ? 'Company Form' : '',
      //   to:  accessFunctionNew("Company", "create") ? '/forms/company-form' : '',
      //   icon: accessFunctionNew("Company", "create") ? <BsBuilding className="nav-icon" /> : '',
      // },
      {
        component: CNavItem,
        name: "Company Group",
        to: "/masters/companyGroup",
      },
      {
        component: CNavItem,
        name: "Company",
        to: "/masters/company",
      },
      {
        component: CNavItem,
        name: "Application",
        to: "/masters/application",
      },

      // {
      //   component: CNavItem,
      //   name: 'Device',
      //   to: '/masters/Device',

      // },
    ],
  },
  {
    component: CNavGroup,
    name: "User Management",
    to: "/masters",
    icon: <RiUserSettingsFill className="nav-icon" />,
    items: [
      // {
      //   component: CNavItem,
      //   name: accessFunctionNew('Company', 'create') ? 'Company Form' : '',
      //   to:  accessFunctionNew("Company", "create") ? '/forms/company-form' : '',
      //   icon: accessFunctionNew("Company", "create") ? <BsBuilding className="nav-icon" /> : '',
      // },
      {
        component: CNavItem,
        name: "Role",
        to: "/userManagement/role",
      },
      {
        component: CNavItem,
        name: "User Registration",
        to: "/userManagement/userForm",
      },
      {
        component: CNavItem,
        name: "Search User",
        to: "/userManagement/searchUser",
      },
    ],
  },
  {
    component: CNavGroup,
    name: "Access Control",
    icon: <FaFileContract className="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Company Application Mapping",
        to: "/accessControl/CompanyApplicationAccess",
      },
      {
        component: CNavItem,
        name: "Access Items",
        to: "/masters/accessitems",
      },
      {
        component: CNavItem,
        name: "Role Link Access",
        to: "/accessControl/RoleLinkAccess",
      },
      {
        component: CNavItem,
        name: "Role Action Access",
        to: "/accessControl/RoleActionAccess",
      },
    ],
  },
];
const listNav = [
  {
    component: CNavGroup,
    name: "Masters",
    to: "/masters",
    icon: <RiUserSettingsFill className="nav-icon" />,
    items: [
      // {
      //   component: CNavItem,
      //   name: accessFunctionNew('Company', 'create') ? 'Company Form' : '',
      //   to:  accessFunctionNew("Company", "create") ? '/forms/company-form' : '',
      //   icon: accessFunctionNew("Company", "create") ? <BsBuilding className="nav-icon" /> : '',
      // },
      {
        component: CNavItem,
        name: "Company Group",
        to: "/masters/companyGroup",
      },
      {
        component: CNavItem,
        name: "Company",
        to: "/masters/company",
      },
      {
        component: CNavItem,
        name: "Application",
        to: "/masters/application",
      },

      // {
      //   component: CNavItem,
      //   name: 'Device',
      //   to: '/masters/Device',

      // },
    ],
  },
  {
    component: CNavGroup,
    name: "User Management",
    to: "/masters",
    icon: <RiUserSettingsFill className="nav-icon" />,
    items: [
      // {
      //   component: CNavItem,
      //   name: accessFunctionNew('Company', 'create') ? 'Company Form' : '',
      //   to:  accessFunctionNew("Company", "create") ? '/forms/company-form' : '',
      //   icon: accessFunctionNew("Company", "create") ? <BsBuilding className="nav-icon" /> : '',
      // },
      {
        component: CNavItem,
        name: "Role",
        to: "/userManagement/role",
      },
      {
        component: CNavItem,
        name: "User Registration",
        to: "/userManagement/userForm",
      },
      {
        component: CNavItem,
        name: "Search User",
        to: "/userManagement/searchUser",
      },
    ],
  },
  {
    component: CNavGroup,
    name: "Access Control",
    icon: <FaFileContract className="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Company Application Mapping",
        to: "/accessControl/CompanyApplicationAccess",
      },
      {
        component: CNavItem,
        name: "Access Items",
        to: "/masters/accessitems",
      },
      {
        component: CNavItem,
        name: "Role Link Access",
        to: "/accessControl/RoleLinkAccess",
      },
      {
        component: CNavItem,
        name: "Role Action Access",
        to: "/accessControl/RoleActionAccess",
      },
    ],
  },
  // {
  //   component: CNavGroup,
  //   name: 'Resourse Management',
  //   icon: <FaUsers className="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Employee Form',
  //       to: '/resource/EmployeeForm',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Designation',
  //       to: '/resourse/designation',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Department',
  //       to: '/resourse/department',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Search Employee',
  //       to: '/resourse/searchEmployee',
  //     },
  //   ]
  // },

  //   {
  //     component: CNavGroup,
  //     name: 'Leave',
  //     icon: <FaFileContract className="nav-icon" />,
  //     items: [
  //       {
  //         component: CNavItem,
  //         name: 'Leave Limit',
  //         to: '/leave/LeaveLimit',

  //       },
  //     ]
  //   },
  //   {
  //     component: CNavGroup,
  //     name: 'Shift',
  //     icon: <FaUsers className="nav-icon" />,
  //     items: [

  //       {
  //         component: CNavItem,
  //         name: 'Shift Form',
  //         to: '/shift/ShiftForm',

  //       },
  //     ]
  //   },
  //   {
  //     component: CNavGroup,
  //     name: 'Contract',
  //     icon: <RiFileEditFill className="nav-icon" />,
  //     items: [
  //       {
  //         component: CNavItem,
  //         name: 'Create Contract',
  //         to: '/contract/ContractForm',

  //       },
  //       {
  //         component: CNavItem,
  //         name: 'Module Form',
  //         to: '/contract/ModuleForm',

  //       },
  //       {
  //         component: CNavItem,
  //         name: 'Requirement Form',
  //         to: '/contract/RequirementForm',

  //       },
  //     ]
  //   },
  // {
  //   component: CNavGroup,
  //   name: 'Employee Management',
  //   icon: <FaUsers className="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Employee Form',
  //       to: '/resource/EmployeeForm',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Designation',
  //       to: '/resourse/designation',

  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Department',
  //       to: '/resourse/department',

  //     }

  //   ]
  // }
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
