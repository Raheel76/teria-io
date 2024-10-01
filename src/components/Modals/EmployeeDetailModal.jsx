import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import chatuser from "../../assets/CU.png";
import Qr from "../../assets/qr.png";
import TaskP from "../../assets/tp1.png";
import Employee1 from "../../assets/u1.png";
import Employee2 from "../../assets/tp4.jpg";
import Employee3 from "../../assets/tp3.png";
import Employee4 from "../../assets/tp2.png";
import Viewer from "react-viewer";
// import "react-viewer/dist/index.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Icon } from "@iconify/react";
import { images } from "../../data";

const EmployeeDetailModal = ({ onClose }) => {
  useEffect(() => {
    document.querySelector(".slide-in-modal").classList.add("modal-open");
  }, []);
  const handleModalClick = (e) => {
    e.stopPropagation();
  };
  const [isTask, setIsTask] = useState(true);
  const [isPhotos, setIsPhotos] = useState(false);
  const [isLogs, setIsLogs] = useState(false);
  const [isMessage, setIsMessage] = useState(false);

  const toggleisTask = () => {
    setIsTask(true);
    setIsPhotos(false);
    setIsLogs(false);
    setIsMessage(false);
  };
  const toggleisPhotos = () => {
    setIsPhotos(true);
    setIsTask(false);
    setIsLogs(false);
    setIsMessage(false);
  };
  const toggleisLogs = () => {
    setIsPhotos(false);
    setIsLogs(true);
    setIsTask(false);
    setIsMessage(false);
  };
  const toggleisMessage = () => {
    setIsMessage(true);
    setIsPhotos(false);
    setIsLogs(false);
    setIsTask(false);
  };
  useEffect(() => {
    setIsTask(true);
    setIsPhotos(false);
    setIsLogs(false);
    setIsMessage(false);
  }, []);
  const sliderRef = useRef(null);
  const [activeButton, setActiveButton] = useState(null);

  const nextSlide = () => {
    sliderRef.current.slickNext();
    setActiveButton("next");
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
    setActiveButton("prev");
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    arrows: false,
  };
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImageClick = (index) => {
    setActiveIndex(index);
    setVisible(true);
  };
  return (
    <>
      <div className="employee-modal-overlay" onClick={onClose}>
        <div className="slide-in-modal" onClick={handleModalClick}>
          <div className="employee-modal-content">
            <div className="row p-0 m-0">
              <div className="col-lg-8 col-12 p-0 m-0">
                <div className="employee-modal-left">
                  <div className="employee-head d-flex justify-content-between align-items-center">
                    <div className=" employee-head-left d-flex align-items-center gap-3">
                      <div
                        className="table-icon d-flex justify-content-center align-items-center"
                        style={{
                          color: "#3fb9d3",
                          backgroundColor: "#f0f6f7",
                        }}
                      >
                        <iconify-icon icon="ic:outline-clean-hands"></iconify-icon>
                      </div>
                      <h6 className="m-0 fs-20">
                        Clean Bus 35 Route 32663 Bus MAN serial number
                      </h6>
                    </div>
                    <div className="employee-head-right d-flex align-items-center gap-3">
                      <iconify-icon icon="iconoir:edit-pencil"></iconify-icon>
                      <iconify-icon icon="ri:more-fill"></iconify-icon>
                    </div>
                  </div>
                  <div className="employee-tabs mb-4 d-flex align-items-center">
                    <div
                      className={`view-tab-details ${isTask && "active"}`}
                      onClick={toggleisTask}
                    >
                      <h5 className="m-0 fS-14">Tasks</h5>
                    </div>
                    <div
                      className={`view-tab-details ${isPhotos && "active"}`}
                      onClick={toggleisPhotos}
                    >
                      <h5 className="m-0 fS-14">Photos</h5>
                    </div>
                    <div
                      className={`view-tab-details ${isLogs && "active"}`}
                      onClick={toggleisLogs}
                    >
                      <h5 className="m-0 fS-14">Logs</h5>
                    </div>
                    <div
                      className={`view-tab-details ${isMessage && "active"}`}
                      onClick={toggleisMessage}
                    >
                      <h5 className="m-0 fS-14">Message</h5>
                    </div>
                  </div>
                  {isTask && (
                    <>
                      <div className="task-description px-4 pb-4">
                        <h6 className=" m-0 fs-14">
                          Be sure to customize your cleaning schedule to fit
                          your needs. Some chores may be monthly in one family
                          and are needed more often in others. If you find that
                          cleaning an item or dealing with it only monthly still
                          leaves it very dirty when you tackle it again, add it
                          to your weekly or biweekly cleaning.
                        </h6>
                      </div>
                      <div className=" d-flex justify-content-between px-4 pb-4 align-items-center">
                        <h6 className="m-0 fs-16">Photos</h6>
                        <Link className=" text-decoration-none blue-text">
                          <h5 className="m-0 fS-13">See all</h5>
                        </Link>
                      </div>
                      <div className="photos-slider mb-4">
                        <div className="photos-slider position-relative">
                          <div
                            className={`custom-prev-button d-flex justify-content-center position-absolute align-content-center ${
                              activeButton === "prev" ? "active" : ""
                            }`}
                            onClick={prevSlide}
                          >
                            <Icon
                              icon="iconoir:arrow-left-circled"
                              className="icon"
                            />
                          </div>
                          <Slider
                            {...settings}
                            ref={sliderRef}
                            className="photos-gallery px-4"
                          >
                            <div className="showcase-photo w-auto position-relative">
                              <img
                                src={TaskP}
                                alt="task photos"
                                className="img-fluid"
                              />
                              <div className="employee-pic">
                                <img
                                  src={Employee1}
                                  alt="employee picture"
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                            <div className="showcase-photo w-auto position-relative">
                              <img
                                src={Employee2}
                                alt="task photos"
                                className="img-fluid"
                              />
                              <div className="employee-pic">
                                <img
                                  src={Employee1}
                                  alt="employee picture"
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                            <div className="showcase-photo w-auto position-relative">
                              <img
                                src={Employee3}
                                alt="task photos"
                                className="img-fluid"
                              />
                              <div className="employee-pic">
                                <img
                                  src={Employee1}
                                  alt="employee picture"
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                            <div className="showcase-photo w-auto position-relative">
                              <img
                                src={Employee4}
                                alt="task photos"
                                className="img-fluid"
                              />
                              <div className="employee-pic">
                                <img
                                  src={Employee1}
                                  alt="employee picture"
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                            <div className="showcase-photo w-auto position-relative">
                              <img
                                src={Employee2}
                                alt="task photos"
                                className="img-fluid"
                              />
                              <div className="employee-pic">
                                <img
                                  src={Employee1}
                                  alt="employee picture"
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                            <div className="showcase-photo w-auto position-relative">
                              <img
                                src={Employee3}
                                alt="task photos"
                                className="img-fluid"
                              />
                              <div className="employee-pic">
                                <img
                                  src={Employee1}
                                  alt="employee picture"
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                          </Slider>
                          <div
                            className={`custom-next-button position-absolute ${
                              activeButton === "next" ? "active" : ""
                            }`}
                            onClick={nextSlide}
                          >
                            <Icon
                              icon="iconoir:arrow-right-circled"
                              className="icon"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="divider "></div>
                      <div className="modal-left-bottom">
                        <div className=" checklists">
                          <h6 className="mb-4 fs-16">Checklists</h6>
                          <div className="check-list mb-4 d-flex align-items-center gap-2">
                            <div className="checklist-circle d-flex justify-content-center align-items-center">
                              <iconify-icon icon="ph:circle"></iconify-icon>
                            </div>
                            <h6 className="m-0 fs-14">Clean front window</h6>
                          </div>
                          <div className="check-list mb-4 d-flex align-items-center gap-2">
                            <div className="checklist-circle d-flex justify-content-center align-items-center">
                              <iconify-icon icon="ph:circle"></iconify-icon>
                            </div>
                            <h6 className="m-0 fs-14">Clean back window</h6>
                          </div>
                          <div className="check-list mb-4 d-flex align-items-center gap-2">
                            <div className="checklist-circle d-flex justify-content-center align-items-center">
                              <iconify-icon icon="ph:circle"></iconify-icon>
                            </div>
                            <h6 className="m-0 fs-14">
                              Cleand bus 35 Route 32663 Bus number
                            </h6>
                          </div>
                          <div className="check-list d-flex align-items-center gap-2">
                            <div className="checklist-circle d-flex justify-content-center align-items-center">
                              <iconify-icon icon="ph:circle"></iconify-icon>
                            </div>
                            <h6 className="m-0 fs-14">
                              Cleand 32663 Bus number
                            </h6>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  {isPhotos && (
                    <>
                      <div className="divider "></div>
                      <div className="photos-left-bottom">
                        <div className="photos-checklists">
                          <h6 className="mb-4 fs-16">Photos</h6>
                          <div className="upload-photos d-flex justify-content-center align-items-center">
                            <div className=" d-flex gap-4 align-items-center">
                              <iconify-icon icon="tdesign:cloud-upload"></iconify-icon>
                              <h6 className="m-0 fS-14 fw-500 light-gray">
                                Drop a photo here or click to upload
                              </h6>
                            </div>
                          </div>
                          <div className="my-4 d-flex justify-content-center">
                            <div className=" d-flex align-items-center gap-3">
                              <h5 className="m-0 fS-13 fw-500 dim-text">
                                Uploaded by
                              </h5>
                              <div className=" d-flex align-items-center gap-2">
                                <div className="table-icons">
                                  <img
                                    src="/src/assets/cc11.png"
                                    alt="Employee 1"
                                    className="img-fluid"
                                  />
                                </div>
                                <h5 className="m-0 fs-13">All participants</h5>
                                <div className="table-dropdown-list d-flex justify-content-center align-items-center">
                                  <iconify-icon icon="gridicons:dropdown"></iconify-icon>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            {images.map((image, index) => (
                              <div className="col-lg-3 mb-4" key={index}>
                                <div>
                                  <div className="showcase-photos w-auto position-relative">
                                    <img
                                      src={image.src}
                                      alt={image.alt}
                                      className="img-fluid main-photo"
                                      onClick={() => handleImageClick(index)}
                                    />
                                    <div className="employee-photo">
                                      <img
                                        src={Employee1}
                                        alt="employee picture"
                                        className="img-fluid"
                                        onClick={() => handleImageClick(index)}
                                      />
                                    </div>
                                    <div className="overlay"></div>
                                    <div
                                      className="preview-icon-container"
                                      onClick={() => handleImageClick(index)}
                                    >
                                      <iconify-icon icon="teenyicons:zoom-in-outline"></iconify-icon>
                                    </div>
                                  </div>
                                  <h5 className="mt-2 text-center fs-10 fw-500 light-gray">
                                    12 March 2022 — 13:53
                                  </h5>
                                </div>
                              </div>
                            ))}

                            <Viewer
                              visible={visible}
                              onClose={() => {
                                setVisible(false);
                              }}
                              images={images}
                              activeIndex={activeIndex}
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  {isLogs && (
                    <>
                      <div className="divider "></div>
                      <div className="modal-left-bottom">
                        <div className=" checklists">
                          <h6 className="mb-4 fs-16">Logs</h6>
                          <div className="divider "></div>
                          <div className=" d-flex justify-content-between my-4">
                            <h6 className="m-0 fs-11 fw-500 primary-text">
                              Cody Fisher
                            </h6>
                            <h6 className="m-0 fs-11  fw-500  primary-text">
                              Upload 3 pictures
                            </h6>
                            <h6 className="me-5 fs-11 fw-500 dim-text ">
                              12 March 2022 — 13:53
                            </h6>
                          </div>
                          <div className="divider "></div>
                          <div className=" d-flex justify-content-between align-items-center my-4">
                            <h6 className="m-0 fs-11 fw-500 primary-text">
                              Cody Fisher
                            </h6>
                            <h6 className="m-0 fs-11  fw-500  primary-text">
                              Update task description
                            </h6>
                            <h6 className="me-5 fs-11 fw-500 dim-text ">
                              15 March 2022 — 13:53
                            </h6>
                          </div>
                          <div className="divider "></div>
                          <div className=" d-flex justify-content-between my-4">
                            <h6 className="m-0 fs-11 fw-500 primary-text">
                              Cody Fisher
                            </h6>
                            <h6 className="m-0 fs-11  fw-500  primary-text">
                              Assign tast to Savannah Nguyen
                            </h6>
                            <h6 className="me-5 fs-11 fw-500 dim-text ">
                              16 March 2022 — 13:53
                            </h6>
                          </div>
                          <div className="divider "></div>
                          <div className=" d-flex justify-content-between my-4">
                            <h6 className="m-0 fs-11 fw-500 primary-text">
                              Savannah Nguyen
                            </h6>
                            <h6 className="m-0 fs-11  fw-500  primary-text">
                              Complete task
                            </h6>
                            <h6 className="me-5 fs-11 fw-500 dim-text ">
                              17 March 2022 — 13:53
                            </h6>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  {isMessage && (
                    <>
                      <div className="divider "></div>
                      <div className="message-left-bottom">
                        <div className=" checklists">
                          <h6>Message</h6>
                          <div className="chat-box">
                            <div className="chat-day my-4 d-flex justify-content-center align-items-center">
                              <h6 className="m-0 dim-text  fs-10 fw-500">
                                Today
                              </h6>
                            </div>
                            <div className="new-messages d-flex flex-column gap-2 ">
                              <div className=" d-flex gap-3 ">
                                <div className="new-user">
                                  <img
                                    src={chatuser}
                                    alt=" chat user "
                                    className=" img-fluid"
                                  />
                                </div>
                                <div className=" d-flex flex-column gap-2">
                                  {" "}
                                  <h6 className="m-0 fs-13">Cody Fisher</h6>
                                  <div className="new-chat-box p-2">
                                    <h6 className="m-0  fs-14">
                                      I need more soap for this task
                                    </h6>
                                  </div>
                                  <h6 className="m-0 dim-text  fs-10 fw-500">
                                    12:03
                                  </h6>
                                </div>
                              </div>
                            </div>
                            <div className="quick-reply d-flex justify-content-end">
                              <div className=" d-flex flex-column gap-2">
                                <div className="reply-message">
                                  <h5 className="m-0 fs-14">Let me see</h5>
                                </div>
                                <h6 className="ms-auto dim-text  fs-10 fw-500">
                                  12:03
                                </h6>
                              </div>
                            </div>
                            <div className="new-messages d-flex flex-column gap-2 ">
                              <div className=" d-flex gap-3 ">
                                <div className="new-user">
                                  <img
                                    src={chatuser}
                                    alt=" chat user "
                                    className=" img-fluid"
                                  />
                                </div>
                                <div className=" d-flex flex-column gap-2">
                                  {" "}
                                  <h6 className="m-0 fs-13">Cody Fisher</h6>
                                  <div className="new-chats-box p-2">
                                    <h6 className="m-0  fs-14">
                                      Be sure to customize your cleaning
                                      schedule to fit your needs. Some chores
                                      may be monthly in one family and are
                                      needed more often in others. If you find
                                      that cleaning an item or dealing with it
                                      only monthly still leaves it very dirty
                                      when you tackle it again, add it to your
                                      weekly or biweekly cleaning.
                                    </h6>
                                  </div>
                                  <h6 className="m-0 dim-text  fs-10 fw-500">
                                    12:03
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="send-message d-flex align-items-center justify-content-between mt-3 p-4 position-relative">
                            <div className="message-type">
                              <input
                                type="text"
                                placeholder="Type your message"
                              />
                            </div>
                            <div className="message-sent d-flex align-items-center justify-content-center ">
                              <iconify-icon icon="iconoir:maps-arrow-diagonal"></iconify-icon>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="col-lg-4 col-12 p-0 m-0">
                <div className="employee-modal-right">
                  <div className="employee-right-head d-flex align-items-center">
                    <h6 className="m-0 fs-16">Information</h6>
                  </div>
                  <div className="employee-stats pb-4 d-flex flex-column">
                    <div className=" d-flex align-items-center justify-content-between">
                      <h5 className="m-0 secondary-text fs-13 fw-500">
                        Status
                      </h5>
                      <div className="new-status d-flex align-items-center gap-1">
                        <h5 className="m-0 black-text fs-12 fw-600">New</h5>
                        <iconify-icon icon="gridicons:dropdown"></iconify-icon>
                      </div>
                    </div>
                    <div className=" d-flex align-items-center justify-content-between">
                      <h5 className="m-0 secondary-text fs-13 fw-500">
                        Employee
                      </h5>
                      <div className="employee-table-profiles d-flex align-items-center gap-2">
                        <div className="table-uswer-profile">
                          <img src="/src/assets/u1.png" alt="table user" />
                        </div>
                        <h5 className="m-0 black-text fs-13">
                          Cameron Williamson
                        </h5>
                        <div className="table-dropdown-list d-flex justify-content-center align-items-center">
                          <iconify-icon icon="gridicons:dropdown"></iconify-icon>
                        </div>
                      </div>
                    </div>
                    <div className=" d-flex align-items-center justify-content-between">
                      <h5 className="m-0 secondary-text fs-13 fw-500">
                        Recurrency
                      </h5>
                      <div className="d-flex align-items-center gap-2">
                        <h5 className="m-0 black-text fs-13">Every day</h5>
                        <div className="table-dropdown-list d-flex justify-content-center align-items-center">
                          <iconify-icon icon="gridicons:dropdown"></iconify-icon>
                        </div>
                      </div>
                    </div>
                    <div className=" d-flex align-items-center gap-2">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked"
                          checked
                        />
                      </div>
                      <h6 className=" m-0 fs-13">
                        This task is available for client
                      </h6>
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="chat-info">
                    <div className=" d-flex justify-content-between  align-items-center">
                      <h6 className="m-0 fs-16">New massages</h6>

                      <Link
                        className=" text-decoration-none"
                        style={{ color: "#605BFF" }}
                      >
                        <h5 className="m-0 fS-13 fw-500">See all</h5>
                      </Link>
                    </div>
                    <div className="new-messages d-flex flex-column gap-2 ">
                      <div className=" d-flex justify-content-between align-items-center">
                        <div className=" d-flex gap-2">
                          <div className="new-user">
                            <img
                              src={chatuser}
                              alt=" chat user "
                              className=" img-fluid"
                            />
                          </div>
                          <h6 className="m-0 fs-13">Cody Fisher</h6>
                        </div>
                        <div className=" d-flex justify-content-between">
                          <h5 className="m-0 fs-10 secondary-text ">12:03</h5>
                        </div>
                      </div>

                      <div className="new-chat-box ms-4">
                        <h6 className="m-0  fs-13">
                          I need more soap for this task
                        </h6>
                      </div>
                    </div>
                    <div className="new-messages d-flex flex-column gap-2 ">
                      <div className=" d-flex justify-content-between align-items-center">
                        <div className=" d-flex gap-2">
                          <div className="new-user">
                            <img
                              src={chatuser}
                              alt=" chat user "
                              className=" img-fluid"
                            />
                          </div>
                          <h6 className="m-0 fs-13">Cody Fisher</h6>
                        </div>
                        <div className=" d-flex justify-content-between">
                          <h5 className="m-0  fs-10 secondary-text ">12:03</h5>
                        </div>
                      </div>

                      <div className="new-chat-box ms-4">
                        <h6 className="m-0  fs-13">
                          I need more soap for this task
                        </h6>
                      </div>
                    </div>
                    <div className="reply-new-message d-flex justify-content-end align-items-center gap-2">
                      <iconify-icon icon="material-symbols:chat-outline"></iconify-icon>
                      <h6 className="m-0 fS-14" style={{ color: "#605BFF" }}>
                        Reply messages
                      </h6>
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className=" parent ">
                    <div className="employee-right-bottom d-flex flex-column justify-content-center align-items-center">
                      <div>
                        <img src={Qr} alt="" />
                      </div>
                      <div className=" d-flex justify-content-between mt-3 gap-5 align-items-center">
                        <div className="qr-icon d-flex align-items-center gap-1">
                          <iconify-icon icon="iconoir:arrow-down-circled"></iconify-icon>
                          <h5 className="m-0 fs-13">Download</h5>
                        </div>
                        <div className="qr-icon d-flex align-items-center gap-1">
                          <iconify-icon icon="material-symbols:print-outline"></iconify-icon>
                          <h5 className="m-0 fs-13">Print</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal-close-button d-flex justify-content-center align-items-center "
          onClick={onClose}
        >
          <iconify-icon icon="radix-icons:cross-2"></iconify-icon>
        </div>
      </div>
    </>
  );
};

export default EmployeeDetailModal;
