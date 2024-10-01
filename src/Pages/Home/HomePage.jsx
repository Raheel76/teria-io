import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, HomeHeader } from "../../components";
const HomePage = () => {
  return (
    <div className="w-100 " >
      <HomeHeader />
     <div className=" w-100" >
     <Outlet></Outlet>
     </div>
      <Footer />
    </div>
  );
};

export default HomePage;
