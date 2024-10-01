import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Group.png";
import userprofile from "../../assets/user1.png";

const DashboardHeader = ({ toggleSidebar }) => {
  return (
    <div className="dashboard-header d-flex justify-content-between align-items-center w-100">
      <div className="dashboard-logo">
        <Link to="/MainDashboard" className="main-logo">
          <img src={Logo} alt="Main Logo" className="img-fluid" />
        </Link>
      </div>
      <div className="dashboard-header-input position-relative">
        <input type="text" placeholder="Search" />
        <div className="dashboard-header-search position-absolute">
          <iconify-icon icon="tabler:search"></iconify-icon>
        </div>
      </div>
      {/* <div className="dash-sidebar-toggle" onClick={toggleSidebar}>
        <iconify-icon icon="charm:menu-hamburger"></iconify-icon>
      </div> */}
      <div>
        <div className="dashboard-header-right d-flex align-items-center gap-4">
          <div className="dashboard-header-notification d-flex align-items-center position-relative" style={{ height: "37px" }}>
            <iconify-icon icon="bi:bell"></iconify-icon>
            <div className="bell-notifications d-flex align-items-center justify-content-sm-center position-absolute">
              <h5 className="m-0">43</h5>
            </div>
          </div>
          <div className="header-user-profile d-flex align-items-center gap-3">
            <div className="dash-user-profile">
              <img src={userprofile} alt="user profile" className=" img-fluid" />
            </div>
            <h6 className="m-0 fs-14">Ghulam Rasool</h6>
            <div className="dash-profile-icon d-flex align-items-center justify-content-center">
              <iconify-icon icon="gridicons:dropdown"></iconify-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
