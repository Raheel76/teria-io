import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Clean from "../../assets/clean.png";
const Sidebar = ({ isSidebarVisible, toggleSidebar }) => {
  const [activeLink, setActiveLink] = useState(true);

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };
  return (
      <div className= {`sidebar d-flex flex-column align-items-center ${isSidebarVisible ? "visible" : "hidden"}`  }>
        <div className="clean-on d-flex flex-column justify-content-center align-items-center text-center">
          <img src={Clean} alt="Clean on" className=" img-fluid" />
          <h6 className="m-0 mt-2 me-3 fs-13">clean</h6>
        </div>
        <div className="close-sidebar-icon"  onClick={toggleSidebar} >
          <iconify-icon icon="line-md:menu-to-close-alt-transition"></iconify-icon>
        </div>
        <div className="sidebar-nav-links mt-2 d-flex flex-column align-items-center ">
          <NavLink
            to="/MainDashboard"
            className={`nav-items d-flex flex-column text-decoration-none justify-content-center align-items-center text-center $${
              activeLink === "nav-items" ? "active" : ""
            }`}
            onClick={() => handleSetActiveLink("nav-items")}
          >
            <iconify-icon icon="tabler:dashboard"></iconify-icon>
            <h6 className="m-0 mt-2 fs-13">Dashboard</h6>
          </NavLink>
          <NavLink
            to="/Tasks"
            className={`nav-items d-flex flex-column text-decoration-none justify-content-center align-items-center text-center $${
              activeLink === "nav-items" ? "active" : ""
            }`}
            onClick={() => handleSetActiveLink("nav-items")}
          >
            <iconify-icon icon="iconoir:archive"></iconify-icon>
            <h6 className="m-0 mt-2 fs-13">Tasks</h6>
          </NavLink>
          <NavLink
            to="/Clients"
            className={`nav-items d-flex flex-column text-decoration-none justify-content-center align-items-center text-center $${
              activeLink === "nav-items" ? "active" : ""
            }`}
            onClick={() => handleSetActiveLink("nav-items")}
          >
            <iconify-icon icon="iconoir:user-bag"></iconify-icon>
            <h6 className="m-0 mt-2 fs-13">Clients</h6>
          </NavLink>
          <NavLink
            to="/Calendar"
            className={`nav-items d-flex flex-column text-decoration-none justify-content-center align-items-center text-center $${
              activeLink === "nav-items" ? "active" : ""
            }`}
            onClick={() => handleSetActiveLink("nav-items")}
          >
                       <iconify-icon  icon="iconoir:calendar"></iconify-icon>
            <h6 className="m-0 mt-2 fs-13">Calendar</h6>
          </NavLink>
          <NavLink
            to="/Employees"
            className={`nav-items d-flex flex-column text-decoration-none justify-content-center align-items-center text-center $${
              activeLink === "nav-items" ? "active" : ""
            }`}
            onClick={() => handleSetActiveLink("nav-items")}
          >
            <iconify-icon icon="iconoir:google-docs"></iconify-icon>
            <h6 className="m-0 mt-2 fs-13">Employees</h6>
          </NavLink>
          <NavLink
            to="/Settings"
            className={`nav-items d-flex flex-column text-decoration-none justify-content-center align-items-center text-center $${
              activeLink === "nav-items" ? "active" : ""
            }`}
            onClick={() => handleSetActiveLink("nav-items")}
          >
            <iconify-icon icon="uiw:setting-o"></iconify-icon>
            <h6 className="m-0 mt-2 fs-13">Settings</h6>
          </NavLink>
        </div>
      </div>
  );
};

export default Sidebar;
