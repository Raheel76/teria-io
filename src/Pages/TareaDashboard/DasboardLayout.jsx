import React, { useState } from "react";
import Sidebar from "../../components/LayOut/Sidebar";
import DashboardHeader from "../../components/LayOut/DashboardHeader";

import { Outlet } from "react-router-dom";
import { MobileHeader } from "../../components";

const DashboardLayout = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="w-100" style={{backgroundColor:"#F0F3F7"}}>
      <div className="w-100">
        <DashboardHeader toggleSidebar={toggleSidebar} />
      </div>
      <div className="d-flex">
        <div>
          <Sidebar isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
        </div>
        <div
          className="w-100 flex-1"
          style={{ marginTop: "80px", }}
        >
          <div className="main-layout-container" >
            <Outlet />
          </div>
        </div>
      </div>
      <div className=" w-100 d-lg-none d-block">
      <MobileHeader />
      </div>
    </div>
  );
};

export default DashboardLayout;