import React from "react";
import {tasksData} from "../../data";
import DashboardChart from "./DataCharts/DashboardChart";
import { Link } from "react-router-dom";
import Employee1 from "../../assets/du1.png";
import Employee2 from "../../assets/du2.png";
import Employee3 from "../../assets/du3.png";
import Employee4 from "../../assets/du4.png";
import Employee5 from "../../assets/du5.png";
import Client1 from "../../assets/cc11.png";
import Client2 from "../../assets/cc22.png";
import Client3 from "../../assets/cc33.png";
import Client4 from "../../assets/cc4.png";
import Client5 from "../../assets/cc5.png";

const MainDashboard = () => {
  return (
    <>
      <div className="main-container">
        <div className="row">
          {tasksData.map((task, index) => (
            <div className="col-lg-3 col-12" key={index}>
              <div className="card border-0 dash-task-cards position-relative">
                <h5 className="mb-3 fs-13">{task.title}</h5>
                <div className="box-number d-flex align-items-center gap-3">
                  {task.numberBox && (
                    <div className="number-box">
                      <img
                        src={task.numberBox}
                        alt="Number Box"
                        className="img-fluid"
                      />
                    </div>
                  )}
                  <h6 className="m-0 fs-24">{task.number}</h6>
                </div>
                <div className="dash-task-icon position-absolute">
                  <iconify-icon icon={task.icon}></iconify-icon>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-12">
            <DashboardChart />
          </div>
        </div>

          <div className="row my-4">
            <div className="col-lg-6 col-12">
              <div className="card border-0 dashboard-employee-cards">
                <div className="mb-2 d-flex justify-content-between">
                  <h6 className="m-0 fs-20">Employees (13)</h6>
                  <Link>See more</Link>
                </div>
                <div className="dashboard-employee-user d-flex justify-content-between align-items-center">
                  <div className="dashboard-employee-details d-flex gap-3 ">
                    <div style={{ width: "28px", height: "28px" }}>
                      <img
                        src={Employee1}
                        alt="Employee 1"
                        className=" img-fluid"
                      />
                    </div>
                    <div className=" d-flex flex-column">
                      <h5 className=" m-0 fs-16">Cameron Williamson</h5>
                      <h4 className=" m-0 fs-11">Bysiness Analyst, Active </h4>
                    </div>
                  </div>
                  <div className=" d-flex align-items-center  gap-lg-4 gap-1">
                    <div className="archive-icon d-flex align-items-center">
                      <iconify-icon icon="iconoir:archive"></iconify-icon>
                      <h3 className=" m-0 fs-13">115</h3>
                    </div>
                    <div className="dashboard-employee-icons d-flex  justify-content-center align-items-center">
                      <iconify-icon icon="uil:plus-circle"></iconify-icon>
                    </div>
                  </div>
                </div>
                <div className="divider"></div>

                <div className="dashboard-employee-user d-flex justify-content-between align-items-center">
                  <div className="dashboard-employee-details d-flex gap-3 ">
                    <div style={{ width: "28px", height: "28px" }}>
                      <img
                        src={Employee2}
                        alt="Employee 1"
                        className=" img-fluid"
                      />
                    </div>
                    <div className=" d-flex flex-column">
                      <h5 className=" m-0 fs-16">Ralph Edwards</h5>
                      <h4 className=" m-0 fs-11">Graphic Designer </h4>
                    </div>
                  </div>
                  <div className=" d-flex align-items-center gap-4">
                    <div className="archive-icon d-flex align-items-center">
                      <iconify-icon icon="iconoir:archive"></iconify-icon>
                      <h3 className=" m-0 fs-13">9</h3>
                    </div>
                    <div className="dashboard-employee-icons d-flex  justify-content-center align-items-center">
                      <iconify-icon icon="uil:plus-circle"></iconify-icon>
                    </div>
                  </div>
                </div>
                <div className="divider"></div>

                <div className="dashboard-employee-user d-flex justify-content-between align-items-center">
                  <div className="dashboard-employee-details d-flex gap-3 ">
                    <div style={{ width: "28px", height: "28px" }}>
                      <img
                        src={Employee3}
                        alt="Employee 1"
                        className=" img-fluid"
                      />
                    </div>
                    <div className=" d-flex flex-column">
                      <h5 className=" m-0 fs-16">Jerome Bell</h5>
                      <h4 className=" m-0 fs-11">Front-End Developer</h4>
                    </div>
                  </div>
                  <div className=" d-flex align-items-center gap-4">
                    <div className="archive-icon d-flex  align-items-center">
                      <iconify-icon icon="iconoir:archive"></iconify-icon>
                      <h3 className=" m-0 fs-13">26</h3>
                    </div>
                    <div className="dashboard-employee-icons d-flex  justify-content-center align-items-center">
                      <iconify-icon icon="uil:plus-circle"></iconify-icon>
                    </div>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="dashboard-employee-user d-flex justify-content-between align-items-center">
                  <div className="dashboard-employee-details d-flex gap-3 ">
                    <div style={{ width: "28px", height: "28px" }}>
                      <img
                        src={Employee4}
                        alt="Employee 1"
                        className=" img-fluid"
                      />
                    </div>
                    <div className=" d-flex flex-column">
                      <h5 className=" m-0 fs-16">Jane Cooper</h5>
                      <h4 className=" m-0 fs-11">Project Manager</h4>
                    </div>
                  </div>
                  <div className=" d-flex align-items-center gap-4">
                    <div className="archive-icon d-flex  align-items-center">
                      <iconify-icon icon="iconoir:archive"></iconify-icon>
                      <h3 className=" m-0 fs-13">43</h3>
                    </div>
                    <div className="dashboard-employee-icons d-flex  justify-content-center align-items-center">
                      <iconify-icon icon="uil:plus-circle"></iconify-icon>
                    </div>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="dashboard-employee-user d-flex justify-content-between align-items-center">
                  <div className="dashboard-employee-details d-flex gap-3 ">
                    <div style={{ width: "28px", height: "28px" }}>
                      <img
                        src={Employee5}
                        alt="Employee 1"
                        className=" img-fluid"
                      />
                    </div>
                    <div className=" d-flex flex-column">
                      <h5 className=" m-0 fs-16">Esther Howard</h5>
                      <h4 className=" m-0 fs-11">Back-End Developer</h4>
                    </div>
                  </div>
                  <div className=" d-flex align-items-center gap-4">
                    <div className="archive-icon d-flex  align-items-center">
                      <iconify-icon icon="iconoir:archive"></iconify-icon>
                      <h3 className=" m-0 fs-13">4</h3>
                    </div>
                    <div className="dashboard-employee-icons d-flex  justify-content-center align-items-center">
                      <iconify-icon icon="uil:plus-circle"></iconify-icon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="card border-0 dashboard-employee-cards">
                <div className="mb-2 d-flex justify-content-between">
                  <h6 className="m-0 fs-20">Clients (4)</h6>
                  <Link>See more</Link>
                </div>
                <div className="dashboard-employee-user d-flex justify-content-between align-items-center">
                  <div className="dashboard-employee-details d-flex gap-3 ">
                    <div className=" client-icons">
                      <img
                        src={Client1}
                        alt="Employee 1"
                        className=" img-fluid"
                      />
                    </div>
                    <div className=" d-flex flex-column">
                      <h5 className=" m-0 fs-16">Cameron Williamson</h5>
                      <h4 className=" m-0 fs-11">Bysiness Analyst, Active </h4>
                    </div>
                  </div>
                  <div className=" d-flex align-items-center gap-lg-4 gap-1">
                    <div className="archive-icon d-flex align-items-center">
                      <iconify-icon icon="iconoir:google-docs"></iconify-icon>
                      <h3 className=" m-0 fs-13">65</h3>
                    </div>
                    <div className="archive-icon d-flex align-items-center">
                      <iconify-icon icon="iconoir:archive"></iconify-icon>
                      <h3 className=" m-0 fs-13">115</h3>
                    </div>
                    <div className="dashboard-employee-icons d-flex  justify-content-center align-items-center">
                      <iconify-icon icon="uil:plus-circle"></iconify-icon>
                    </div>
                  </div>
                </div>
                <div className="divider"></div>

                <div className="dashboard-employee-user d-flex justify-content-between align-items-center">
                  <div className="dashboard-employee-details d-flex gap-3 ">
                    <div className=" client-icons">
                      <img
                        src={Client2}
                        alt="Employee 1"
                        className=" img-fluid"
                      />
                    </div>
                    <div className=" d-flex flex-column">
                      <h5 className=" m-0 fs-16">Ralph Edwards</h5>
                      <h4 className=" m-0 fs-11">Graphic Designer </h4>
                    </div>
                  </div>
                  <div className=" d-flex align-items-center  gap-lg-4 gap-1">
                  <div className="archive-icon d-flex align-items-center">
                      <iconify-icon icon="iconoir:google-docs"></iconify-icon>
                      <h3 className=" m-0 fs-13">2</h3>
                    </div>
                    <div className="archive-icon d-flex align-items-center">
                      <iconify-icon icon="iconoir:archive"></iconify-icon>
                      <h3 className=" m-0 fs-13">9</h3>
                    </div>
                    <div className="dashboard-employee-icons d-flex  justify-content-center align-items-center">
                      <iconify-icon icon="uil:plus-circle"></iconify-icon>
                    </div>
                  </div>
                </div>
                <div className="divider"></div>

                <div className="dashboard-employee-user d-flex justify-content-between align-items-center">
                  <div className="dashboard-employee-details d-flex gap-3 ">
                    <div className=" client-icons">
                      <img
                        src={Client3}
                        alt="Employee 1"
                        className=" img-fluid"
                      />
                    </div>
                    <div className=" d-flex flex-column">
                      <h5 className=" m-0 fs-16">Jerome Bell</h5>
                      <h4 className=" m-0 fs-11">Front-End Developer</h4>
                    </div>
                  </div>
                  <div className=" d-flex align-items-center  gap-lg-4 gap-1">
                  <div className="archive-icon d-flex align-items-center">
                      <iconify-icon icon="iconoir:google-docs"></iconify-icon>
                      <h3 className=" m-0 fs-13">13</h3>
                    </div>
                    <div className="archive-icon d-flex  align-items-center">
                      <iconify-icon icon="iconoir:archive"></iconify-icon>
                      <h3 className=" m-0 fs-13">26</h3>
                    </div>
                    <div className="dashboard-employee-icons d-flex  justify-content-center align-items-center">
                      <iconify-icon icon="uil:plus-circle"></iconify-icon>
                    </div>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="dashboard-employee-user d-flex justify-content-between align-items-center">
                  <div className="dashboard-employee-details d-flex gap-3 ">
                    <div className=" client-icons">
                      <img
                        src={Client4}
                        alt="Employee 1"
                        className=" img-fluid"
                      />
                    </div>
                    <div className=" d-flex flex-column">
                      <h5 className=" m-0 fs-16">Jane Cooper</h5>
                      <h4 className=" m-0 fs-11">Project Manager</h4>
                    </div>
                  </div>
                  <div className=" d-flex align-items-center  gap-lg-4 gap-1">
                  <div className="archive-icon d-flex align-items-center">
                      <iconify-icon icon="iconoir:google-docs"></iconify-icon>
                      <h3 className=" m-0 fs-13">0</h3>
                    </div>
                    <div className="archive-icon d-flex  align-items-center">
                      <iconify-icon icon="iconoir:archive"></iconify-icon>
                      <h3 className=" m-0 fs-13">43</h3>
                    </div>
                    <div className="dashboard-employee-icons d-flex  justify-content-center align-items-center">
                      <iconify-icon icon="uil:plus-circle"></iconify-icon>
                    </div>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="dashboard-employee-user d-flex justify-content-between align-items-center">
                  <div className="dashboard-employee-details d-flex gap-3 ">
                    <div className=" client-icons">
                      <img
                        src={Client5}
                        alt="Employee 1"
                        className=" img-fluid"
                      />
                    </div>
                    <div className=" d-flex flex-column">
                      <h5 className=" m-0 fs-16">Esther Howard</h5>
                      <h4 className=" m-0 fs-11">Back-End Developer</h4>
                    </div>
                  </div>
                  <div className=" d-flex align-items-center  gap-lg-4 gap-1">
                  <div className="archive-icon d-flex align-items-center">
                      <iconify-icon icon="iconoir:google-docs"></iconify-icon>
                      <h3 className=" m-0 fs-13">65</h3>
                    </div>
                    <div className="archive-icon d-flex  align-items-center">
                      <iconify-icon icon="iconoir:archive"></iconify-icon>
                      <h3 className=" m-0 fs-13">4</h3>
                    </div>
                    <div className="dashboard-employee-icons d-flex  justify-content-center align-items-center">
                      <iconify-icon icon="uil:plus-circle"></iconify-icon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default MainDashboard;
