import React, { useState } from "react";
import Logo from "../../assets/Group.png";
import { Link } from "react-router-dom";
import Country1 from "../../assets/c1.png";
import Country2 from "../../assets/c2.png";
import Country3 from "../../assets/c3.png";
import Country4 from "../../assets/c4.png";
import Country5 from "../../assets/c5.png";


const Footer = () => {
  const [isCountry, setIsCountry] = useState(false);
  const toggleisCountry = () => {
    setIsCountry(!isCountry);
  };
  return (
    <div className="Footer-container">
      <div className="home-header">
        <nav className="navbar navbar-expand-lg bg-white ">
          <div className="container-fluid justify-content-between">
            <Link className="main-logo">
              <img src={Logo} alt="Main Logo" className=" img-fluid" />
            </Link>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  How it works
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  FAQ
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Privacy Policy
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Terms
                </Link>
              </li>
            </ul>
            <div className="select-country-box d-flex align-items-center">
              <div className="select-img">
                <img
                  src={Country1}
                  alt=" select country"
                  className=" img-fluid"
                />
              </div>
              <div
                className="select-language d-flex align-items-center"
                style={{ gap: "8px" }}
              >
                <h6 className="m-0">English</h6>
                <div
                  className="select-icon d-flex justify-content-center align-items-center"
                  onClick={toggleisCountry}
                >
                  <iconify-icon icon="eva:chevron-down-outline"></iconify-icon>
                </div>
              </div>
              {isCountry && (
                <div className="card border-0 countries-list flex-column gap-2">
                  <div className="country-language d-flex align-items-center w-100">
                    <div className=" d-flex align-items-center gap-3">
                      <div className="select-img">
                        <img
                          src={Country1}
                          alt=" select country"
                          className=" img-fluid"
                        />
                      </div>
                      <div className="select-language d-flex align-items-center">
                        <h6 className="m-0">English</h6>
                      </div>
                    </div>
                  </div>
                  <div className="country-language d-flex align-items-center w-100">
                    <div className=" d-flex align-items-center gap-3">
                      <div className="select-img">
                        <img
                          src={Country2}
                          alt=" select country"
                          className=" img-fluid"
                        />
                      </div>
                      <div className="select-language d-flex align-items-center">
                        <h6 className="m-0">Dutch</h6>
                      </div>
                    </div>
                  </div>
                  <div className="country-language d-flex align-items-center w-100">
                    <div className=" d-flex align-items-center gap-3">
                      <div className="select-img">
                        <img
                          src={Country3}
                          alt=" select country"
                          className=" img-fluid"
                        />
                      </div>
                      <div className="select-language d-flex align-items-center">
                        <h6 className="m-0">German</h6>
                      </div>
                    </div>
                  </div>
                  <div className="country-language d-flex align-items-center w-100">
                    <div className=" d-flex align-items-center gap-3">
                      <div className="select-img">
                        <img
                          src={Country4}
                          alt=" select country"
                          className=" img-fluid"
                        />
                      </div>
                      <div className="select-language d-flex align-items-center">
                        <h6 className="m-0">Spanish</h6>
                      </div>
                    </div>
                  </div>
                  <div className="country-language d-flex align-items-center w-100">
                    <div className=" d-flex align-items-center gap-3">
                      <div className="select-img">
                        <img
                          src={Country5}
                          alt=" select country"
                          className=" img-fluid"
                        />
                      </div>
                      <div className="select-language d-flex align-items-center">
                        <h6 className="m-0">Portuguese</h6>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
