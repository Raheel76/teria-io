import React, { useEffect, useState } from "react";
import Heroimg from "../../assets/hero.png";
import Button from "../../components/Button/Button";
import PLay from "../../assets/p.png";
import Apple from "../../assets/a.png";
import Icon1 from "../../assets/ic1.png";
import Icon2 from "../../assets/ic2.png";
import Icon3 from "../../assets/ic3.png";
import Icon4 from "../../assets/ic4.png";
import Icon5 from "../../assets/ic5.png";
import Icon6 from "../../assets/ic6.png";
import Work from "../../assets/it1.png";
import Work2 from "../../assets/it2.png";
import Work3 from "../../assets/it3.png";
import Web from "../../assets/web.png";
import Mob from "../../assets/mobile.png";
import { Footer, HomeHeader } from "../../components";

const features = [
  {
    id: 1,
    title: "Client list",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    icon: Icon1,
  },
  {
    id: 2,
    title: "Project Management",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    icon: Icon2,
  },
  {
    id: 3,
    title: "Time Tracking",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    icon: Icon3,
  },
  {
    id: 4,
    title: "Reporting",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    icon: Icon4,
  },
  {
    id: 5,
    title: "Team Collaboration",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
    icon: Icon5,
  },
  {
    id: 6,
    title: "Task Automation",
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    icon: Icon6,
  },
];
const faqData = [
  {
    question: "At vero eos et accusamus et iusto odio dignissimos",
    answer:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  },
  {
    question: "Et harum quidem rerum facilis est et expedita distinctio",
    answer:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  },
  {
    question: "Nam libero tempore, cum solut",
    answer:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  },
  {
    question: "Temporibus autem quibusdam et aut officiis debitis aut rerum",
    answer:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  },
];
const Home = () => {
  const [isClient, setIsClient] = useState(true);
  const toggleisClient = () => {
    setIsClient(true);
    setIsEmployer(false);
    setIsEmployee(false);
  };
  const [isEmployer, setIsEmployer] = useState(true);
  const toggleisEmployer = () => {
    setIsEmployer(true);
    setIsClient(false);
    setIsEmployee(false);
  };
  const [isEmployee, setIsEmployee] = useState(true);
  const toggleisEmployee = () => {
    setIsEmployee(true);
    setIsEmployer(false);
    setIsClient(false);
  };
  useEffect(() => {
    setIsClient(true);
    setIsEmployer(false);
    setIsEmployee(false);
  }, []);

  const [isMonthlyPrice, setIsMonthlyPrice] = useState(true);
  const toggleisMonthlyPrice = () => {
    setIsMonthlyPrice(true);
    setIsYearlyPrice(false);
  };
  const [isYearlyPrice, setIsYearlyPrice] = useState(true);
  const toggleisYearlyPrice = () => {
    setIsYearlyPrice(true);
    setIsMonthlyPrice(false);
  };
  useEffect(() => {
    setIsMonthlyPrice(true);
    setIsYearlyPrice(false);
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);

  const handleFaqClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      <div className="w-100 " >
      <HomeHeader />
     <div className=" w-100" >
     <div className="w-100">
        <div className="container hero-section">
          <div className="row align-items-center">
            <div className="col-lg-5 col-12 order-lg-0 order-1">
              <div className="hero-left-content d-flex flex-column">
                <h6 className="m-0 primary-text">
                  Be wise. Organize and digitize your enterprise!
                </h6>
                <h5 className="m-0 secondry-text">
                  Use Tarea to assign and track tasks.
                </h5>
                <div className="d-flex flex-lg-row flex-column align-items-center justify-content-between">
                  <Button
                    text="Try now for free"
                    padding="10px 40px"
                    borderRdius="16px"
                    fontSize="16px"
                    fontWeight="500"
                  />
                  <div className="d-flex align-items-center mt-lg-0 mt-3 gap-lg-2 gap-4">
                    <div className="download">
                      <h4 className="m-0 text-end">Download the App:</h4>
                    </div>
                    <img src={Apple} alt="Hero" className="img-fluid" />
                    <img src={PLay} alt="Hero" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-12">
              <div className="hero-img">
                <img src={Heroimg} alt="Hero" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-5">
          <div className="divider"></div>
        </div>
        <div className="features">
          <h6 className="m-0 my-lg-5 my-3 primary-text text-center">
            It's never been so easy to follow up your team and clients.
          </h6>
          <div className="container">
            <div className="row">
              {features.map((feature) => (
                <div key={feature.id} className="col-lg-4 col-12 mb-lg-5 mb-3">
                  <div className="list-features d-flex flex-column mb-5">
                    <div className="features-icon d-flex justify-content-center align-items-center">
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="img-fluid"
                      />
                    </div>
                    <div>
                      <h5 className="mb-2">{feature.title}</h5>
                      <div style={{ width: "295px" }}>
                        <span>{feature.description}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="how-it-works mx-4">
          <h6 className="m-0 py-5 primary-text text-center">How it works?</h6>
          <div className="row justify-content-between p-lg-5 p-0 position-relative">
            <div className="col-lg-3 col-12">
              <div className="work-card">
                <img src={Work} alt="Work" className=" img-fluid" />
                <div className="card-text mt-4 text-center d-flex flex-column gap-2">
                  <h5 className="m-0">Create an account</h5>
                  <h6 className="m-0">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-12">
              <div className="work-card mt-5">
                <img src={Work2} alt="Work" className=" img-fluid" />
                <div className="card-text mt-4 text-center d-flex flex-column gap-2">
                  <h5 className="m-0">Add your clients & employees</h5>
                  <h6 className="m-0">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-12">
              <div className="work-card my-lg-0 m-3">
                <img src={Work3} alt="Work" className=" img-fluid" />
                <div className="card-text mt-4 text-center d-flex flex-column gap-2">
                  <h5 className="m-0">Assign and track tasks</h5>
                  <h6 className="m-0">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className=" d-flex justify-content-center pb-5">
            <Button
              text="Get started"
              padding="10px 40px"
              borderRdius="16px"
              fontSize="16px"
              fontWeight="500"
            />
          </div>
        </div>
        <div className="web-version">
          <div className="row">
            <div className="col-lg-8 col-12">
              <div className="web-img w-100">
                <img src={Web} alt="Web" className=" img-fluid" />
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="web-tabs-area d-flex flex-column  ">
                <h6 className="m-0 py-5 primary-text ">Web version</h6>
                <div className="web-tab-text">
                  <div className="web-tabs mb-5 d-flex align-items-center">
                    <div
                      className={`web-tab-box ${isClient && "active"}`}
                      onClick={toggleisClient}
                    >
                      <h6 className="m-0">Client</h6>
                    </div>
                    <div
                      className={`web-tab-box ${isEmployer && "active"}`}
                      onClick={toggleisEmployer}
                    >
                      <h6 className="m-0">Employer</h6>
                    </div>
                    <div
                      className={`web-tab-box ${isEmployee && "active"}`}
                      onClick={toggleisEmployee}
                    >
                      <h6 className="m-0">Employee</h6>
                    </div>
                  </div>
                  <div>
                    {isClient && (
                      <div className="tab-text-list d-flex flex-column">
                        <div className=" d-flex align-items-center gap-2">
                          <iconify-icon icon="ic:baseline-check"></iconify-icon>
                          <h6 className="m-0">
                            Sed ut perspiciatis unde omnis
                          </h6>
                        </div>
                        <div className=" d-flex align-items-center gap-2">
                          <iconify-icon icon="ic:baseline-check"></iconify-icon>
                          <h6 className="m-0">
                            Rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis
                          </h6>
                        </div>
                        <div className=" d-flex align-items-center gap-2">
                          <iconify-icon icon="ic:baseline-check"></iconify-icon>
                          <h6 className="m-0">
                            Iste natus error sit voluptatem accusantium
                          </h6>
                        </div>
                        <div className=" d-flex align-items-center gap-2">
                          <iconify-icon icon="ic:baseline-check"></iconify-icon>
                          <h6 className="m-0">
                            Et quasi architecto beatae vitae dicta sunt
                            explicabo
                          </h6>
                        </div>
                      </div>
                    )}
                    {isEmployer && (
                      <div className="tab-text-list d-flex flex-column">
                        <div className=" d-flex align-items-center gap-2">
                          <iconify-icon icon="ic:baseline-check"></iconify-icon>
                          <h6 className="m-0">
                            Unde omnis Sed ut perspiciatis
                          </h6>
                        </div>
                        <div className=" d-flex align-items-center gap-2">
                          <iconify-icon icon="ic:baseline-check"></iconify-icon>
                          <h6 className="m-0">
                            Ipsa quae ab illo inventore veritatis Rem aperiam,
                            eaque
                          </h6>
                        </div>
                        <div className=" d-flex align-items-center gap-2">
                          <iconify-icon icon="ic:baseline-check"></iconify-icon>
                          <h6 className="m-0">
                            Error si Iste natus t voluptatem accusantium
                          </h6>
                        </div>
                        <div className=" d-flex align-items-center gap-2">
                          <iconify-icon icon="ic:baseline-check"></iconify-icon>
                          <h6 className="m-0">
                            Beatae vitae dicta sunt Et quasi architecto
                            explicabo
                          </h6>
                        </div>
                      </div>
                    )}
                    {isEmployee && (
                      <div className="tab-text-list d-flex flex-column">
                        <div className=" d-flex align-items-center gap-2">
                          <iconify-icon icon="ic:baseline-check"></iconify-icon>
                          <h6 className="m-0">
                            Ut perspiciatis Unde omnis Sed
                          </h6>
                        </div>
                        <div className=" d-flex align-items-center gap-2">
                          <iconify-icon icon="ic:baseline-check"></iconify-icon>
                          <h6 className="m-0">
                            Inventore veritatis Rem aperiam, eaque Ipsa quae ab
                            illo
                          </h6>
                        </div>
                        <div className=" d-flex align-items-center gap-2">
                          <iconify-icon icon="ic:baseline-check"></iconify-icon>
                          <h6 className="m-0">
                            Tvoluptatem accusantium Error si Iste natus
                          </h6>
                        </div>
                        <div className=" d-flex align-items-center gap-2">
                          <iconify-icon icon="ic:baseline-check"></iconify-icon>
                          <h6 className="m-0">
                            Sunt Et quasi architecto explicabo Beatae vitae
                            dicta
                          </h6>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-5">
          <div className="divider"></div>
        </div>
        <div className="container web-version">
          <div className="row">
            <div className="col-lg-7 col-12 order-lg-0 order-1">
              <div className="web-tabs-area d-flex flex-column  ">
                <h6 className="m-0 py-5 primary-text ">Mobile App version</h6>
                <div className="web-tab-text">
                  <div className="web-tabs mb-5 d-flex align-items-center">
                    <div
                      className={`web-tab-box ${isClient && "active"}`}
                      onClick={toggleisClient}
                    >
                      <h6 className="m-0">Client</h6>
                    </div>
                    <div
                      className={`web-tab-box ${isEmployer && "active"}`}
                      onClick={toggleisEmployer}
                    >
                      <h6 className="m-0">Employer</h6>
                    </div>
                    <div
                      className={`web-tab-box ${isEmployee && "active"}`}
                      onClick={toggleisEmployee}
                    >
                      <h6 className="m-0">Employee</h6>
                    </div>
                  </div>
                  <div>
                    {isClient && (
                      <div className="tab-text-list d-flex flex-column">
                        <div className=" d-flex align-items-center gap-2">
                          <iconify-icon icon="ic:baseline-check"></iconify-icon>
                          <h6 className="m-0">
                            Sed ut perspiciatis unde omnis
                          </h6>
                        </div>
                        <div className=" d-flex align-items-center gap-2">
                          <iconify-icon icon="ic:baseline-check"></iconify-icon>
                          <h6 className="m-0">
                            Rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis
                          </h6>
                        </div>
                        <div className=" d-flex align-items-center gap-2">
                          <iconify-icon icon="ic:baseline-check"></iconify-icon>
                          <h6 className="m-0">
                            Iste natus error sit voluptatem accusantium
                          </h6>
                        </div>
                        <div className=" d-flex align-items-center gap-2">
                          <iconify-icon icon="ic:baseline-check"></iconify-icon>
                          <h6 className="m-0">
                            Et quasi architecto beatae vitae dicta sunt
                            explicabo
                          </h6>
                        </div>
                      </div>
                    )}
                    {isEmployer && (
                      <div className="tab-text-list d-flex flex-column">
                        <div className=" d-flex align-items-center gap-2">
                          <iconify-icon icon="ic:baseline-check"></iconify-icon>
                          <h6 className="m-0">
                            Unde omnis Sed ut perspiciatis
                          </h6>
                        </div>
                        <div className=" d-flex align-items-center gap-2">
                          <iconify-icon icon="ic:baseline-check"></iconify-icon>
                          <h6 className="m-0">
                            Ipsa quae ab illo inventore veritatis Rem aperiam,
                            eaque
                          </h6>
                        </div>
                        <div className=" d-flex align-items-center gap-2">
                          <iconify-icon icon="ic:baseline-check"></iconify-icon>
                          <h6 className="m-0">
                            Error si Iste natus t voluptatem accusantium
                          </h6>
                        </div>
                        <div className=" d-flex align-items-center gap-2">
                          <iconify-icon icon="ic:baseline-check"></iconify-icon>
                          <h6 className="m-0">
                            Beatae vitae dicta sunt Et quasi architecto
                            explicabo
                          </h6>
                        </div>
                      </div>
                    )}
                    {isEmployee && (
                      <div className="tab-text-list d-flex flex-column">
                        <div className=" d-flex align-items-center gap-2">
                          <iconify-icon icon="ic:baseline-check"></iconify-icon>
                          <h6 className="m-0">
                            Ut perspiciatis Unde omnis Sed
                          </h6>
                        </div>
                        <div className=" d-flex align-items-center gap-2">
                          <iconify-icon icon="ic:baseline-check"></iconify-icon>
                          <h6 className="m-0">
                            Inventore veritatis Rem aperiam, eaque Ipsa quae ab
                            illo
                          </h6>
                        </div>
                        <div className=" d-flex align-items-center gap-2">
                          <iconify-icon icon="ic:baseline-check"></iconify-icon>
                          <h6 className="m-0">
                            Tvoluptatem accusantium Error si Iste natus
                          </h6>
                        </div>
                        <div className=" d-flex align-items-center gap-2">
                          <iconify-icon icon="ic:baseline-check"></iconify-icon>
                          <h6 className="m-0">
                            Sunt Et quasi architecto explicabo Beatae vitae
                            dicta
                          </h6>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-12 ">
              <div className="web-img w-100">
                <img src={Mob} alt="Web" className=" img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <div className=" pricing-tables mx-4">
          <h6 className="m-0 mb-5 primary-text text-center">Pricing</h6>
          <div className=" d-flex justify-content-center  align-items-center ">
            <div className="pricing-tabs d-flex justify-content-center  align-items-center gap-2">
              <div
                className={`price-tab-box d-flex align-items-center ${
                  isMonthlyPrice && "active"
                }`}
                onClick={toggleisMonthlyPrice}
              >
                <h6 className="m-0">Monthly</h6>
              </div>
              <div
                className={`price-tab-box d-flex align-items-center ${
                  isYearlyPrice && "active"
                }`}
                onClick={toggleisYearlyPrice}
              >
                <h6 className="m-0">Annualy is 15% off</h6>
              </div>
            </div>
          </div>
          <div className="our-pricing-tables">
            {isMonthlyPrice && (
              <>
                <div className="row mt-5">
                  <div className="col-lg-4 col-12">
                    <div className="price-table-package mb-lg-0 mb-3 ">
                      <h5 className="mb-2 text-center">Free</h5>
                      <h6 className="m-0 text-center">
                        Small teams and entrepreneurs
                      </h6>
                      <div className="mx-4 my-4">
                        <div className="divider"></div>
                      </div>
                      <h4 className=" text-center">Up to </h4>
                      <h4 className="m-0 text-center">5 employees</h4>
                      <div className="mx-4 my-4">
                        <div className="divider"></div>
                      </div>
                      <h3 className=" text-center">Free</h3>
                      <h2 className="mb-4 text-center">Forever</h2>
                      <div className=" d-flex justify-content-center ">
                        <Button
                          text="Try  now!"
                          padding="10px 32px"
                          borderRdius="16px"
                          fontSize="16px"
                          fontWeight="500"
                          backgroundColor="transparent"
                          Border="1px solid #605BFF"
                          textColor="#605BFF"
                          height="56px"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-12">
                    <div className="price-table-package  mb-lg-0 mb-3">
                      <h5
                        className="mb-2 text-center"
                        style={{ color: "#08B6F0" }}
                      >
                        Pro
                      </h5>
                      <h6 className="m-0 text-center">Middle business</h6>
                      <div className="mx-4 my-4">
                        <div className="divider"></div>
                      </div>
                      <h4 className=" text-center">Up to </h4>
                      <h4 className="m-0 text-center">25 employees</h4>
                      <div className="mx-4 my-4">
                        <div className="divider"></div>
                      </div>
                      <h3 className=" text-center" style={{ color: "#08B6F0" }}>
                        $5
                      </h3>
                      <h2 className="mb-4 text-center">per employee/month</h2>
                      <div className=" d-flex justify-content-center ">
                        <Button
                          text="Buy"
                          padding="10px 32px"
                          borderRdius="16px"
                          fontSize="16px"
                          fontWeight="500"
                          backgroundColor="#605BFF"
                          Border="1px solid #605BFF"
                          textColor="white"
                          height="56px"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-12">
                    <div className="price-table-package ">
                      <h5
                        className="mb-2 text-center"
                        style={{ color: "#605BFF" }}
                      >
                        Enterprise
                      </h5>
                      <h6 className="m-0 text-center">
                        Huge enterprise business
                      </h6>
                      <div className="mx-4 my-4">
                        <div className="divider"></div>
                      </div>
                      <h4 className=" text-center">Unlimited</h4>
                      <h4 className="m-0 text-center">employees</h4>
                      <div className="mx-4 my-4">
                        <div className="divider"></div>
                      </div>
                      <h3 className=" text-center" style={{ color: "#605BFF" }}>
                        $23
                      </h3>
                      <h2 className="mb-4 text-center">Forever</h2>
                      <div className=" d-flex justify-content-center ">
                        <Button
                          text="Buy"
                          padding="10px 32px"
                          borderRdius="16px"
                          fontSize="16px"
                          fontWeight="500"
                          backgroundColor="#605BFF"
                          Border="1px solid #605BFF"
                          textColor="white"
                          height="56px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            {isYearlyPrice && (
              <>
                <div className="row mt-5">
                  <div className="col-lg-4 col-12">
                    <div className="price-table-package ">
                      <h5 className="mb-2 text-center">Free</h5>
                      <h6 className="m-0 text-center">
                        Small teams and entrepreneurs
                      </h6>
                      <div className="mx-4 my-4">
                        <div className="divider"></div>
                      </div>
                      <h4 className=" text-center">Up to </h4>
                      <h4 className="m-0 text-center">15 employees</h4>
                      <div className="mx-4 my-4">
                        <div className="divider"></div>
                      </div>
                      <h3 className=" text-center">Free</h3>
                      <h2 className="mb-4 text-center">Forever</h2>
                      <div className=" d-flex justify-content-center ">
                        <Button
                          text="Try  now!"
                          padding="10px 32px"
                          borderRdius="16px"
                          fontSize="16px"
                          fontWeight="500"
                          backgroundColor="transparent"
                          Border="1px solid #605BFF"
                          textColor="#605BFF"
                          height="56px"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-12">
                    <div className="price-table-package ">
                      <h5
                        className="mb-2 text-center"
                        style={{ color: "#08B6F0" }}
                      >
                        Pro
                      </h5>
                      <h6 className="m-0 text-center">Middle business</h6>
                      <div className="mx-4 my-4">
                        <div className="divider"></div>
                      </div>
                      <h4 className=" text-center">Up to </h4>
                      <h4 className="m-0 text-center">35 employees</h4>
                      <div className="mx-4 my-4">
                        <div className="divider"></div>
                      </div>
                      <h3 className=" text-center" style={{ color: "#08B6F0" }}>
                        $75
                      </h3>
                      <h2 className="mb-4 text-center">per employee/month</h2>
                      <div className=" d-flex justify-content-center ">
                        <Button
                          text="Buy"
                          padding="10px 32px"
                          borderRdius="16px"
                          fontSize="16px"
                          fontWeight="500"
                          backgroundColor="#605BFF"
                          Border="1px solid #605BFF"
                          textColor="white"
                          height="56px"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-12">
                    <div className="price-table-package ">
                      <h5
                        className="mb-2 text-center"
                        style={{ color: "#605BFF" }}
                      >
                        Enterprise
                      </h5>
                      <h6 className="m-0 text-center">
                        Huge enterprise business
                      </h6>
                      <div className="mx-4 my-4">
                        <div className="divider"></div>
                      </div>
                      <h4 className=" text-center">Unlimited</h4>
                      <h4 className="m-0 text-center">employees</h4>
                      <div className="mx-4 my-4">
                        <div className="divider"></div>
                      </div>
                      <h3 className=" text-center" style={{ color: "#605BFF" }}>
                        $93
                      </h3>
                      <h2 className="mb-4 text-center">Forever</h2>
                      <div className=" d-flex justify-content-center ">
                        <Button
                          text="Buy"
                          padding="10px 32px"
                          borderRdius="16px"
                          fontSize="16px"
                          fontWeight="500"
                          backgroundColor="#605BFF"
                          Border="1px solid #605BFF"
                          textColor="white"
                          height="56px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="faqs">
          <div className="row">
            <div className="col-lg-4 col-12">
              <h6 className="m-0 mb-5 primary-text text-lg-start  text-center ">Pricing</h6>
            </div>
            <div className="col-lg-8 col-12">
              {faqData.map((faq, index) => (
                <div key={index} className="faq-card mb-4">
                  <div
                    className="faq-list d-flex align-items-center gap-3"
                    onClick={() => handleFaqClick(index)}
                  >
                    <div
                      className="faq-box d-flex justify-content-center align-items-center"
                      style={{
                        backgroundColor:
                          activeIndex === index ? "#605BFF" : "white",
                        color: activeIndex === index ? "#000" : "#000",
                      }}
                    >
                      <iconify-icon
                        icon={
                          activeIndex === index
                            ? "ic:outline-minus"
                            : "ic:outline-plus"
                        }
                        style={{
                          color: activeIndex === index ? "#fff" : "#605BFF",
                        }}
                      ></iconify-icon>
                    </div>
                    <h6
                      className="m-0"
                      style={{
                        color: activeIndex === index ? "#605BFF" : "#313d5b",
                      }}
                    >
                      {faq.question}
                    </h6>
                  </div>
                  {activeIndex === index && (
                    <div className="show-description ms-1 ps-5">
                      <h5 className="m-0">{faq.answer}</h5>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="question-container">
          <div className="container d-flex flex-column align-items-center justify-content-center ">
            <h6 className="m-0 mb-3 primary-text text-center ">
              Have a question?
            </h6>
            <h5 className="mb-5 text-center ">Drop us a line now</h5>
            <div className="question-contact ">
              <div className="row mb-4">
                <div className="col-lg-6 col-12 mb-lg-0 mb-3">
                  <h5 className="mb-1">Name</h5>
                  <div className="question-contact-input w-100">
                    <input type="text" placeholder="Your Name" />
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <h5 className="mb-1">Email</h5>
                  <div className="question-contact-input w-100">
                    <input type="text" placeholder="name@site.com" />
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-lg-12 col-12">
                  <h5 className="mb-1">Name</h5>
                  <div className="question-textarea">
                    <textarea
                      type="text"
                      placeholder="Your question here"
                      className=" w-100"
                    />
                  </div>
                </div>
              </div>
              <div className=" d-flex justify-content-center ">
                <Button
                  text="Submit"
                  Width="100%"
                  padding="10px 32px"
                  borderRdius="16px"
                  fontSize="16px"
                  fontWeight="500"
                  backgroundColor="#605BFF"
                  Border="1px solid #605BFF"
                  textColor="white"
                  height="56px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
      <Footer />
    </div>
    </>
  );
};

export default Home;
