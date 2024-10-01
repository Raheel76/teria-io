import React, { useState } from "react";
import Button from "../../../components/Button/Button";
import EmployeeDetailModal from "../../../components/Modals/EmployeeDetailModal";
const Tasks = () => {
  const [taskStatus, setTaskStatus] = useState([
    { isSelectStatus: false, isSelectDay: false },
    { isSelectStatus: false, isSelectDay: false },
    { isSelectStatus: false, isSelectDay: false },
    { isSelectStatus: false, isSelectDay: false },
    { isSelectStatus: false, isSelectDay: false },
  ]);

  const toggleSelectStatus = (index) => {
    setTaskStatus((prev) =>
      prev.map((item, idx) =>
        idx === index
          ? { ...item, isSelectStatus: !item.isSelectStatus }
          : { ...item, isSelectStatus: false } 
      )
    );
  };

  const toggleSelectDay = (index) => {
    setTaskStatus((prev) =>
      prev.map((item, idx) =>
        idx === index
          ? { ...item, isSelectDay: !item.isSelectDay }
          : { ...item, isSelectDay: false } // close other dropdowns
      )
    );
  };
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleIconClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="main-task-container">
        <div className="d-flex task-head justify-content-between align-items-center">
          <h6 className="m-0 fs-36">Tasks</h6>
          <div style={{ boxShadow: "0px 2px 6px 0px #E5EBF380" }}>
            <Button
              text="Add new task"
              fontSize="14px"
              fontWeight="500"
              height="40px"
              padding="10px 14px"
              icon="ic:sharp-plus"
              borderRdius="12px"
            />
          </div>
        </div>
        <div className="task-container">
          <h6 className="mb-5 mt-2 fs-20">Todays agenda</h6>
          <div className="row mb-5">
            <div className="col-lg-12 col-12">
              <div className="tasks-table">
                <div className="table-responsive" style={{ overflow: "visible" }}>
                  <div className="tasks-data-table">
                    <div className="tasks-table-head">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="list-one">
                          <div className="d-flex gap-2">
                            <h5 className="mt-1 secondary-text fs-12 fw-500">Task name</h5>
                            <div className="table-head-icon">
                              <iconify-icon icon="mynaui:chevron-up-down"></iconify-icon>
                            </div>
                          </div>
                        </div>
                        <div className="list-two">
                          <div className="d-flex gap-2">
                            <h5 className="mt-1 secondary-text fs-12 fw-500">Client</h5>
                            <div className="table-head-icon">
                              <iconify-icon icon="mynaui:chevron-up-down"></iconify-icon>
                            </div>
                          </div>
                        </div>
                        <div className="list-two">
                          <div className="d-flex gap-2">
                            <h5 className="mt-1 secondary-text fs-12 fw-500">Status</h5>
                            <div className="table-head-icon">
                              <iconify-icon icon="mynaui:chevron-up-down"></iconify-icon>
                            </div>
                          </div>
                        </div>
                        <div className="list-three">
                          <div className="d-flex gap-2">
                            <h5 className="mt-1 secondary-text fs-12 fw-500">Employee</h5>
                            <div className="table-head-icon">
                              <iconify-icon icon="mynaui:chevron-up-down"></iconify-icon>
                            </div>
                          </div>
                        </div>
                        <div className="list-three">
                          <div className="d-flex gap-2">
                            <h5 className="mt-1 secondary-text fs-12 fw-500">Recurrency</h5>
                            <div className="table-head-icon">
                              <iconify-icon icon="mynaui:chevron-up-down"></iconify-icon>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Row 1 */}
                    <div className="stake-table-row d-flex justify-content-between align-items-center">
                      <div className="list-one d-flex gap-2 align-items-center">
                        <div
                          className="table-icon d-flex justify-content-center align-items-center"
                          style={{
                            color: "#3fb9d3",
                            backgroundColor: "#f0f6f7",
                          }}
                        >
                          <iconify-icon icon="ic:outline-clean-hands"></iconify-icon>
                        </div>
                        <div>
                          <h5 className="m-0 fs-16">Wipe down kitchen cabinets</h5>
                        </div>
                      </div>
                      <div className="list-two">
                        <div className="d-flex align-items-center gap-2">
                          <div className="table-icons">
                            <img
                              src="/src/assets/cc11.png"
                              alt="Employee 1"
                              className="img-fluid"
                            />
                          </div>
                          <h6 className="m-0 light-text fs-13">MicroBus</h6>
                        </div>
                      </div>
                      <div className="list-two position-relative">
                        <div
                          className="new-status d-flex align-items-center gap-1"
                          onClick={() => toggleSelectStatus(0)}
                        >
                          <h5 className="m-0 black-text fs-12 fw-600">New</h5>
                          <iconify-icon icon="gridicons:dropdown"></iconify-icon>
                        </div>
                        {taskStatus[0].isSelectStatus && (
                          <div className="table-select-status position-absolute">
                            <div className="card border-0 flex-column select-status-card">
                              <div className="active-status-one d-flex justify-content-between align-items-center">
                                <div className="select-status-one d-flex align-items-center">
                                  <h6 className="m-0 fS-12 fw-600" style={{ color: "#08B6F0" }}>
                                    IN PROGRESS
                                  </h6>
                                </div>
                                <iconify-icon icon="charm:tick"></iconify-icon>
                              </div>
                              <div className="active-status-two d-flex justify-content-between align-items-center">
                                <div className="select-status-two d-flex align-items-center">
                                  <h6 className="m-0 fS-12 fw-600" style={{ color: "#42D04B" }}>
                                    DONE
                                  </h6>
                                </div>
                                <iconify-icon icon="charm:tick"></iconify-icon>
                              </div>
                              <div className="active-status-three d-flex justify-content-between align-items-center">
                                <div className="select-status-three d-flex align-items-center">
                                  <h6 className="m-0 fS-12 fw-600" style={{ color: "#D33FA1" }}>
                                    NEW
                                  </h6>
                                </div>
                                <iconify-icon icon="charm:tick"></iconify-icon>
                              </div>
                              <div className="active-status-three d-flex justify-content-between align-items-center">
                                <div className="select-status-three d-flex align-items-center">
                                  <h6 className="m-0 fS-12 fw-600" style={{ color: "#D38F3F" }}>
                                    REVIEW
                                  </h6>
                                </div>
                                <iconify-icon icon="charm:tick"></iconify-icon>
                              </div>
                              <div className="active-status-three d-flex justify-content-between align-items-center">
                                <div className="select-status-three d-flex align-items-center">
                                  <h6 className="m-0 fS-12 fw-600" style={{ color: "#D04242" }}>
                                    Overdue
                                  </h6>
                                </div>
                                <iconify-icon icon="charm:tick"></iconify-icon>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="list-three">
                        <div className="employee-table-profiles d-flex align-items-center gap-2">
                          <div className="table-uswer-profile">
                            <img src="/src/assets/u1.png" alt="table user" />
                          </div>
                          <h5 className="m-0 black-text fs-13">Cameron Williamson</h5>
                          <div className="table-dropdown-list d-flex justify-content-center align-items-center" onClick={handleIconClick} >
                            <iconify-icon icon="gridicons:dropdown"></iconify-icon>
                          </div>
                        </div>
                      </div>
                      <div className="list-three position-relative">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center gap-2">
                            <h5 className="m-0 black-text fs-13">Every day</h5>
                            <div
                              className="table-dropdown-list d-flex justify-content-center align-items-center"
                              onClick={() => toggleSelectDay(0)}
                            >
                              <iconify-icon icon="gridicons:dropdown"></iconify-icon>
                            </div>
                          </div>
                          <div className="table-details-icons fS-24 secondry-text d-flex gap-3">
                            <div className="qr-scanner">
                              <iconify-icon icon="ri:qr-code-line"></iconify-icon>
                            </div>
                            <iconify-icon icon="ri:more-fill"></iconify-icon>
                          </div>
                        </div>
                        {taskStatus[0].isSelectDay && (
                          <div className="table-select-day position-absolute">
                            <div className="card border-0 flex-column select-day-card">
                              <div className="select-day-one d-flex justify-content-between align-items-center">
                                <h6 className="m-0 fs-13 fw-600">Ones</h6>
                              </div>
                              <div className="select-day-two d-flex justify-content-between align-items-center">
                                <h6 className="m-0 fs-13 fw-600 text-white">Every day</h6>
                                <iconify-icon icon="charm:tick"></iconify-icon>
                              </div>
                              <div className="select-day-three d-flex justify-content-between align-items-center">
                                <h6 className="m-0 fs-13 fw-600" style={{ color: "#605BFF" }}>
                                  Every day
                                </h6>
                                <iconify-icon icon="charm:tick"></iconify-icon>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Row 2 */}
                    <div className="stake-table-row d-flex justify-content-between align-items-center">
                      <div className="list-one d-flex gap-2 align-items-center">
                        <div
                          className="table-icon d-flex justify-content-center align-items-center"
                          style={{
                            color: "#42D33F",
                            backgroundColor: "#F0F7F0",
                          }}
                        >
                          <iconify-icon icon="icon-park-outline:hotel-please-clean"></iconify-icon>
                        </div>
                        <div>
                          <h5 className="m-0 fs-16">
                            Cleand Bus 35 Route 32663 Bus MAN ...
                          </h5>
                        </div>
                      </div>
                      <div className="list-two">
                        <div className="d-flex align-items-center gap-2">
                          <div className="table-icons">
                            <img
                              src="/src/assets/cc22.png"
                              alt="Employee 1"
                              className="img-fluid"
                            />
                          </div>
                          <h6 className="m-0 light-text fs-13">Merchik</h6>
                        </div>
                      </div>
                      <div className="list-two position-relative">
                        <div
                          className="in-progress-status d-flex align-items-center justify-content-between gap-1"
                          onClick={() => toggleSelectStatus(1)}
                        >
                          <h5 className="m-0 black-text fs-12 fw-600">IN Progress</h5>
                          <iconify-icon icon="gridicons:dropdown"></iconify-icon>
                        </div>
                        {taskStatus[1].isSelectStatus && (
                          <div className="table-select-status position-absolute">
                            <div className="card border-0 flex-column select-status-card">
                              <div className="active-status-one d-flex justify-content-between align-items-center">
                                <div className="select-status-one d-flex align-items-center">
                                  <h6 className="m-0 fS-12 fw-600" style={{ color: "#08B6F0" }}>
                                    IN PROGRESS
                                  </h6>
                                </div>
                                <iconify-icon icon="charm:tick"></iconify-icon>
                              </div>
                              <div className="active-status-two d-flex justify-content-between align-items-center">
                                <div className="select-status-two d-flex align-items-center">
                                  <h6 className="m-0 fS-12 fw-600" style={{ color: "#42D04B" }}>
                                    DONE
                                  </h6>
                                </div>
                                <iconify-icon icon="charm:tick"></iconify-icon>
                              </div>
                              <div className="active-status-three d-flex justify-content-between align-items-center">
                                <div className="select-status-three d-flex align-items-center">
                                  <h6 className="m-0 fS-12 fw-600" style={{ color: "#D33FA1" }}>
                                    NEW
                                  </h6>
                                </div>
                                <iconify-icon icon="charm:tick"></iconify-icon>
                              </div>
                              <div className="active-status-three d-flex justify-content-between align-items-center">
                                <div className="select-status-three d-flex align-items-center">
                                  <h6 className="m-0 fS-12 fw-600" style={{ color: "#D38F3F" }}>
                                    REVIEW
                                  </h6>
                                </div>
                                <iconify-icon icon="charm:tick"></iconify-icon>
                              </div>
                              <div className="active-status-three d-flex justify-content-between align-items-center">
                                <div className="select-status-three d-flex align-items-center">
                                  <h6 className="m-0 fS-12 fw-600" style={{ color: "#D04242" }}>
                                    Overdue
                                  </h6>
                                </div>
                                <iconify-icon icon="charm:tick"></iconify-icon>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="list-three">
                        <div className="employee-table-profiles d-flex align-items-center gap-2">
                          <div className="table-uswer-profile">
                            <img src="/src/assets/u2.png" alt="table user" />
                          </div>
                          <h5 className="m-0 black-text fs-13">Ronald Richards</h5>
                          <div className="table-dropdown-list d-flex justify-content-center align-items-center">
                            <iconify-icon icon="gridicons:dropdown"></iconify-icon>
                          </div>
                        </div>
                      </div>
                      <div className="list-three position-relative">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center gap-2">
                            <h5 className="m-0 black-text fs-13">Every week</h5>
                            <div
                              className="table-dropdown-list d-flex justify-content-center align-items-center"
                              onClick={() => toggleSelectDay(1)}
                            >
                              <iconify-icon icon="gridicons:dropdown"></iconify-icon>
                            </div>
                          </div>
                          <div className="table-details-icons fS-24 secondry-text d-flex gap-3">
                            <div className="qr-scanner">
                              <iconify-icon icon="ri:qr-code-line"></iconify-icon>
                            </div>
                            <iconify-icon icon="ri:more-fill"></iconify-icon>
                          </div>
                        </div>
                        {taskStatus[1].isSelectDay && (
                          <div className="table-select-day position-absolute">
                            <div className="card border-0 flex-column select-day-card">
                              <div className="select-day-one d-flex justify-content-between align-items-center">
                                <h6 className="m-0 fs-13 fw-600">Ones</h6>
                              </div>
                              <div className="select-day-two d-flex justify-content-between align-items-center">
                                <h6 className="m-0 fs-13 fw-600 text-white">Every day</h6>
                                <iconify-icon icon="charm:tick"></iconify-icon>
                              </div>
                              <div className="select-day-three d-flex justify-content-between align-items-center">
                                <h6 className="m-0 fs-13 fw-600" style={{ color: "#605BFF" }}>
                                  Every day
                                </h6>
                                <iconify-icon icon="charm:tick"></iconify-icon>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Row 3 */}
                    <div className="stake-table-row d-flex justify-content-between align-items-center">
                      <div className="list-one d-flex gap-2 align-items-center">
                        <div
                          className="table-icon d-flex justify-content-center align-items-center"
                          style={{
                            color: "#A43FD3",
                            backgroundColor: "#F5F0F7",
                          }}
                        >
                          <iconify-icon icon="icon-park-outline:vacuum-cleaner"></iconify-icon>
                        </div>
                        <div>
                          <h5 className="m-0 fs-16">
                            Cleand Windows 34 Route 32663 Bus...
                          </h5>
                        </div>
                      </div>
                      <div className="list-two">
                        <div className="d-flex align-items-center gap-2">
                          <div className="table-icons">
                            <img
                              src="/src/assets/cc33.png"
                              alt="Employee 1"
                              className="img-fluid"
                            />
                          </div>
                          <h6 className="m-0 light-text fs-13">Bustooq</h6>
                        </div>
                      </div>
                      <div className="list-two position-relative">
                        <div
                          className="review-status d-flex align-items-center justify-content-between gap-1"
                          onClick={() => toggleSelectStatus(2)}
                        >
                          <h5 className="m-0 black-text fs-12 fw-600">Review</h5>
                          <iconify-icon icon="gridicons:dropdown"></iconify-icon>
                        </div>
                        {taskStatus[2].isSelectStatus && (
                          <div className="table-select-status position-absolute">
                            <div className="card border-0 flex-column select-status-card">
                              <div className="active-status-one d-flex justify-content-between align-items-center">
                                <div className="select-status-one d-flex align-items-center">
                                  <h6 className="m-0 fS-12 fw-600" style={{ color: "#08B6F0" }}>
                                    IN PROGRESS
                                  </h6>
                                </div>
                                <iconify-icon icon="charm:tick"></iconify-icon>
                              </div>
                              <div className="active-status-two d-flex justify-content-between align-items-center">
                                <div className="select-status-two d-flex align-items-center">
                                  <h6 className="m-0 fS-12 fw-600" style={{ color: "#42D04B" }}>
                                    DONE
                                  </h6>
                                </div>
                                <iconify-icon icon="charm:tick"></iconify-icon>
                              </div>
                              <div className="active-status-three d-flex justify-content-between align-items-center">
                                <div className="select-status-three d-flex align-items-center">
                                  <h6 className="m-0 fS-12 fw-600" style={{ color: "#D33FA1" }}>
                                    NEW
                                  </h6>
                                </div>
                                <iconify-icon icon="charm:tick"></iconify-icon>
                              </div>
                              <div className="active-status-three d-flex justify-content-between align-items-center">
                                <div className="select-status-three d-flex align-items-center">
                                  <h6 className="m-0 fS-12 fw-600" style={{ color: "#D38F3F" }}>
                                    REVIEW
                                  </h6>
                                </div>
                                <iconify-icon icon="charm:tick"></iconify-icon>
                              </div>
                              <div className="active-status-three d-flex justify-content-between align-items-center">
                                <div className="select-status-three d-flex align-items-center">
                                  <h6 className="m-0 fS-12 fw-600" style={{ color: "#D04242" }}>
                                    Overdue
                                  </h6>
                                </div>
                                <iconify-icon icon="charm:tick"></iconify-icon>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="list-three">
                        <div className="employee-table-profiles d-flex align-items-center gap-2">
                          <div className="table-uswer-profile">
                            <img src="/src/assets/u3.png" alt="table user" />
                          </div>
                          <h5 className="m-0 black-text fs-13">Floyd Miles</h5>
                          <div className="table-dropdown-list d-flex justify-content-center align-items-center">
                            <iconify-icon icon="gridicons:dropdown"></iconify-icon>
                          </div>
                        </div>
                      </div>
                      <div className="list-three position-relative">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center gap-2">
                            <h5 className="m-0 black-text fs-13">Ones</h5>
                            <div
                              className="table-dropdown-list d-flex justify-content-center align-items-center"
                              onClick={() => toggleSelectDay(2)}
                            >
                              <iconify-icon icon="gridicons:dropdown"></iconify-icon>
                            </div>
                          </div>
                          <div className="table-details-icons fS-24 secondry-text d-flex gap-3">
                            <div className="qr-scanner">
                              <iconify-icon icon="ri:qr-code-line"></iconify-icon>
                            </div>
                            <iconify-icon icon="ri:more-fill"></iconify-icon>
                          </div>
                        </div>
                        {taskStatus[2].isSelectDay && (
                          <div className="table-select-day position-absolute">
                            <div className="card border-0 flex-column select-day-card">
                              <div className="select-day-one d-flex justify-content-between align-items-center">
                                <h6 className="m-0 fs-13 fw-600">Ones</h6>
                              </div>
                              <div className="select-day-two d-flex justify-content-between align-items-center">
                                <h6 className="m-0 fs-13 fw-600 text-white">Every day</h6>
                                <iconify-icon icon="charm:tick"></iconify-icon>
                              </div>
                              <div className="select-day-three d-flex justify-content-between align-items-center">
                                <h6 className="m-0 fs-13 fw-600" style={{ color: "#605BFF" }}>
                                  Every day
                                </h6>
                                <iconify-icon icon="charm:tick"></iconify-icon>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Row 4 */}
                    <div className="stake-table-row d-flex justify-content-between align-items-center">
                      <div className="list-one d-flex gap-2 align-items-center">
                        <div
                          className="table-icon d-flex justify-content-center align-items-center"
                          style={{
                            color: "#D38F3F",
                            backgroundColor: "#F7F4F0",
                          }}
                        >
                          <iconify-icon icon="material-symbols:cleaning-services-outline"></iconify-icon>
                        </div>
                        <div>
                          <h5 className="m-0 fs-16">
                            Clean Glass in front of Bus office
                          </h5>
                        </div>
                      </div>
                      <div className="list-two">
                        <div className="d-flex align-items-center gap-2">
                          <div className="table-icons">
                            <img
                              src="/src/assets/cc44.png"
                              alt="Employee 1"
                              className="img-fluid"
                            />
                          </div>
                          <h6 className="m-0 light-text fs-13">CleanTer</h6>
                        </div>
                      </div>
                      <div className="list-two position-relative">
                        <div
                          className="done-status d-flex align-items-center justify-content-between gap-1"
                          onClick={() => toggleSelectStatus(3)}
                        >
                          <h5 className="m-0 black-text fs-12 fw-600">Done</h5>
                          <iconify-icon icon="gridicons:dropdown"></iconify-icon>
                        </div>
                        {taskStatus[3].isSelectStatus && (
                          <div className="table-select-status position-absolute">
                            <div className="card border-0 flex-column select-status-card">
                              <div className="active-status-one d-flex justify-content-between align-items-center">
                                <div className="select-status-one d-flex align-items-center">
                                  <h6 className="m-0 fS-12 fw-600" style={{ color: "#08B6F0" }}>
                                    IN PROGRESS
                                  </h6>
                                </div>
                                <iconify-icon icon="charm:tick"></iconify-icon>
                              </div>
                              <div className="active-status-two d-flex justify-content-between align-items-center">
                                <div className="select-status-two d-flex align-items-center">
                                  <h6 className="m-0 fS-12 fw-600" style={{ color: "#42D04B" }}>
                                    DONE
                                  </h6>
                                </div>
                                <iconify-icon icon="charm:tick"></iconify-icon>
                              </div>
                              <div className="active-status-three d-flex justify-content-between align-items-center">
                                <div className="select-status-three d-flex align-items-center">
                                  <h6 className="m-0 fS-12 fw-600" style={{ color: "#D33FA1" }}>
                                    NEW
                                  </h6>
                                </div>
                                <iconify-icon icon="charm:tick"></iconify-icon>
                              </div>
                              <div className="active-status-three d-flex justify-content-between align-items-center">
                                <div className="select-status-three d-flex align-items-center">
                                  <h6 className="m-0 fS-12 fw-600" style={{ color: "#D38F3F" }}>
                                    REVIEW
                                  </h6>
                                </div>
                                <iconify-icon icon="charm:tick"></iconify-icon>
                              </div>
                              <div className="active-status-three d-flex justify-content-between align-items-center">
                                <div className="select-status-three d-flex align-items-center">
                                  <h6 className="m-0 fS-12 fw-600" style={{ color: "#D04242" }}>
                                    Overdue
                                  </h6>
                                </div>
                                <iconify-icon icon="charm:tick"></iconify-icon>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="list-three">
                        <div className="employee-table-profiles d-flex align-items-center gap-2">
                          <div className="table-uswer-profile">
                            <img src="/src/assets/u4.png" alt="table user" />
                          </div>
                          <h5 className="m-0 black-text fs-13">Wade Warren</h5>
                          <div className="table-dropdown-list d-flex justify-content-center align-items-center">
                            <iconify-icon icon="gridicons:dropdown"></iconify-icon>
                          </div>
                        </div>
                      </div>
                      <div className="list-three position-relative">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center gap-2">
                            <h5 className="m-0 black-text fs-13">Every week</h5>
                            <div
                              className="table-dropdown-list d-flex justify-content-center align-items-center"
                              onClick={() => toggleSelectDay(3)}
                            >
                              <iconify-icon icon="gridicons:dropdown"></iconify-icon>
                            </div>
                          </div>
                          <div className="table-details-icons fS-24 secondry-text d-flex gap-3">
                            <div className="qr-scanner">
                              <iconify-icon icon="ri:qr-code-line"></iconify-icon>
                            </div>
                            <iconify-icon icon="ri:more-fill"></iconify-icon>
                          </div>
                        </div>
                        {taskStatus[3].isSelectDay && (
                          <div className="table-select-day position-absolute">
                            <div className="card border-0 flex-column select-day-card">
                              <div className="select-day-one d-flex justify-content-between align-items-center">
                                <h6 className="m-0 fs-13 fw-600">Ones</h6>
                              </div>
                              <div className="select-day-two d-flex justify-content-between align-items-center">
                                <h6 className="m-0 fs-13 fw-600 text-white">Every day</h6>
                                <iconify-icon icon="charm:tick"></iconify-icon>
                              </div>
                              <div className="select-day-three d-flex justify-content-between align-items-center">
                                <h6 className="m-0 fs-13 fw-600" style={{ color: "#605BFF" }}>
                                  Every day
                                </h6>
                                <iconify-icon icon="charm:tick"></iconify-icon>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isModalOpen && <EmployeeDetailModal onClose={handleCloseModal} />}
      </div>
    </>
  );
};

export default Tasks;
