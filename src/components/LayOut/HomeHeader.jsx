import React, { useState } from "react";
import Logo from "../../assets/Group.png";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Country1 from "../../assets/c1.png";
import Country2 from "../../assets/c2.png";
import Country3 from "../../assets/c3.png";
import Country4 from "../../assets/c4.png";
import Country5 from "../../assets/c5.png";
import Block from "../../assets/block.png";
import Verifymail from "../../assets/verif.png";
import Verifymail2 from "../../assets/em.png";
import succ from "../../assets/succ.png";

const HomeHeader = () => {
  const [isCanvasOpen, setIsCanvasOpen] = useState(false);
  const [isCountry, setIsCountry] = useState(false);
  const [currentStep, setCurrentStep] = useState(null);

  const toggleCanvas = () => {
    setIsCanvasOpen(!isCanvasOpen);
  };
  const toggleisCountry = () => {
    setIsCountry(!isCountry);
  };
  const openSignin = () => {
    setCurrentStep("signin");
  };
  const closeModals = () => {
    setCurrentStep(null);
  };
  const goToNextStep = (nextStep) => {
    setCurrentStep(nextStep);
  };
  const goToPreviousStep = (previousStep) => {
    setCurrentStep(previousStep);
  };

  return (
    <div className="home-header">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid px-0 justify-content-between">
          <div className="d-flex align-items-center gap-1">
            <div className="header-menu-icon mt-2" onClick={toggleCanvas}>
              <iconify-icon
                icon={isCanvasOpen ? "oui:cross" : "iconoir:menu"}
              ></iconify-icon>
            </div>
            <Link to="/" className="main-logo">
              <img src={Logo} alt="Main Logo" className="img-fluid" />
            </Link>
          </div>

          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                How it works
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="home-header-buttons  d-flex align-items-center gap-4">
            <Link className="nav-link" to="/MainDashboard" onClick={openSignin}>
              Sign In
            </Link>
            {currentStep === "signin" && (
              <div className="position-relative">
                <div className="auth-modal-overlay">
                  <div className="modal-content">
                    <div className="signin-top">
                      <div className="close-button" onClick={closeModals}>
                        <iconify-icon icon="akar-icons:cross"></iconify-icon>
                      </div>
                      <h5 className="mb-3">Sign in</h5>
                      <div className="row">
                        <div className="col-lg-12 col-12 mb-3">
                          <div className="signin-input w-100">
                            <input type="text" placeholder="Login" required />
                          </div>
                        </div>
                        <div className="col-lg-12 col-12 mb-3">
                          <div className="signin-input w-100 position-relative">
                            <input
                              type="text"
                              placeholder="Password"
                              required
                            />
                            <div className="signin-eye-icon position-absolute">
                              <iconify-icon icon="fluent:eye-28-regular"></iconify-icon>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="sign-in-check d-flex align-items-center mb-3 gap-2">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                        <h6 className="m-0">Remember me</h6>
                      </div>
                      <div
                        className="signin-button mb-3"
                        style={{ boxShadow: "0px 2px 6px 0px #E5EBF380" }}
                      >
                        <Button
                          text="Login"
                          padding="10px 32px"
                          borderRdius="16px"
                          fontSize="16px"
                          fontWeight="500"
                          backgroundColor="#605BFF"
                          Border="1px solid #605BFF"
                          textColor="white"
                          height="56px"
                          width="100%"
                          onClick={() => goToNextStep("accountBlocked")}
                        />
                      </div>
                      <Link
                        className="text-decoration-none"
                        onClick={() => goToNextStep("ForgotPassword")}
                      >
                        <h4 className="m-0 text-center">Forgot password</h4>
                      </Link>
                    </div>
                    <div className="sigin-bottom d-flex justify-content-center align-items-center">
                      <h5 className="m-0">Don't have an account?</h5>
                      <span>
                        <Link onClick={() => goToNextStep("Signup")}>
                          Sign up
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {currentStep === "accountBlocked" && (
              <div className="position-relative">
                <div className="auth-modal-overlay">
                  <div className="blocked-modal-content">
                    <div className="blocked-top d-flex flex-column align-items-center justify-content-center">
                      <div className="close-button" onClick={closeModals}>
                        <iconify-icon icon="akar-icons:cross"></iconify-icon>
                      </div>

                      <div className="block-error d-flex align-items-center justify-content-center">
                        <img src={Block} alt=" Block" className=" img-fluid" />
                      </div>
                      <div className="block-text-button d-flex flex-column justify-content-center align-items-center">
                        <div className="block-text text-center">
                          <h5 className="mb-4">
                            Your account has been blocked
                          </h5>
                          <h6 className="m-0">
                            More information has been provided to your email.
                            Contact us if you disagree with administrator
                            decision
                          </h6>
                        </div>
                        <div
                          className="account-blocked-button mb-3"
                          onClick={() => goToNextStep("Verifymail")}
                          style={{ boxShadow: "0px 2px 6px 0px #E5EBF380" }}
                        >
                          <Button
                            text="Contact administrator"
                            width="100%"
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
                    <div className="sigin-bottom d-flex justify-content-center align-items-center">
                      <h5 className="m-0">Don't have an account?</h5>
                      <span>
                        <Link>Sign up</Link>
                      </span>
                    </div>
                  </div>
                  <div className="back-button  d-flex align-items-center gap-4  position-absolute">
                    <div
                      className="d-flex justify-content-center align-items-center"
                      onClick={() => goToPreviousStep("signin")}
                    >
                      <iconify-icon icon="lets-icons:back"></iconify-icon>
                    </div>
                    <h6 className="m-0">Back</h6>
                  </div>
                </div>
              </div>
            )}
            {currentStep === "Verifymail" && (
              <div className="position-relative">
                <div className="auth-modal-overlay">
                  <div className="blocked-modal-content">
                    <div className="blocked-top d-flex flex-column align-items-center justify-content-center">
                      <div className="close-button" onClick={closeModals}>
                        <iconify-icon icon="akar-icons:cross"></iconify-icon>
                      </div>

                      <div className="block-error d-flex align-items-center justify-content-center">
                        <img
                          src={Verifymail}
                          alt=" Block"
                          className=" img-fluid"
                        />
                      </div>
                      <div className="block-text-button d-flex flex-column justify-content-center align-items-center">
                        <div className="block-text text-center">
                          <h5 className="mb-4">
                            Your mail has been not verified
                          </h5>
                          <h6 className="m-0">
                            Additional instructions have been sent to your email
                          </h6>
                          <h4 className="m-0">usermail@gmail.com</h4>
                        </div>
                        <div
                          className="account-blocked-button d-flex gap-4 mb-3"
                          style={{ boxShadow: "0px 2px 6px 0px #E5EBF380" }}
                        >
                          <Button
                            text="Resend request"
                            padding="10px 16px"
                            borderRdius="16px"
                            fontSize="16px"
                            fontWeight="500"
                            backgroundColor="#605BFF"
                            Border="1px solid #605BFF"
                            textColor="white"
                            height="40px"
                          />
                          <Button
                            text="Change email"
                            padding="10px 16px"
                            borderRdius="16px"
                            fontSize="16px"
                            fontWeight="500"
                            backgroundColor="transparent"
                            Border="1px solid #605BFF"
                            textColor="#605BFF"
                            height="40px"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="sigin-bottom d-flex justify-content-center align-items-center">
                      <h5 className="m-0">Don't have an account?</h5>
                      <span>
                        <Link onClick={() => goToNextStep("Signup")}>
                          Sign up
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="back-button  d-flex align-items-center gap-4  position-absolute">
                    <div
                      className="d-flex justify-content-center align-items-center"
                      onClick={() => goToPreviousStep("signin")}
                    >
                      <iconify-icon icon="lets-icons:back"></iconify-icon>
                    </div>
                    <h6 className="m-0">Back</h6>
                  </div>
                </div>
              </div>
            )}
            {currentStep === "Signup" && (
              <div className="position-relative">
                <div className="auth-modal-overlay">
                  <div className="modal-content">
                    <div className="signin-top">
                      <div className="close-button" onClick={closeModals}>
                        <iconify-icon icon="akar-icons:cross"></iconify-icon>
                      </div>
                      <h5 className="mb-3">Sign Up</h5>
                      <div className="row">
                        <div className="col-lg-12 col-12 mb-3">
                          <h4 className="mb-1">Login</h4>

                          <div className="signin-input w-100">
                            <input
                              type="text"
                              placeholder="Your login"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-12 mb-3">
                          <h4 className="mb-1">Email</h4>

                          <div className="signin-input w-100">
                            <input
                              type="text"
                              placeholder="Your E-mail"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-12 mb-3">
                          <h4 className="mb-1">Password</h4>

                          <div className="signin-input w-100 position-relative">
                            <input
                              type="text"
                              placeholder="At least 6 characters"
                              required
                            />
                            <div className="signin-eye-icon position-absolute">
                              <iconify-icon icon="fluent:eye-28-regular"></iconify-icon>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="sign-in-check d-flex align-items-center mb-3 gap-2">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                        <h6 className="m-0">Remember me</h6>
                      </div>
                      <div
                        className="signin-button mb-3"
                        style={{ boxShadow: "0px 2px 6px 0px #E5EBF380" }}
                      >
                        <Button
                          text="Sign Up
                          "
                          width="100%"

                          padding="10px 32px"
                          borderRdius="16px"
                          fontSize="16px"
                          fontWeight="500"
                          backgroundColor="#605BFF"
                          Border="1px solid #605BFF"
                          textColor="white"
                          height="56px"
                          onClick={() => goToNextStep("VerifySignUpMail")}
                        />
                      </div>
                      <Link
                        className="text-decoration-none"
                        onClick={() => goToNextStep("ForgotPassword")}
                      >
                        <h4 className="m-0 text-center">Forgot password</h4>
                      </Link>
                    </div>
                    <div className="sigin-bottom d-flex justify-content-center align-items-center">
                      <h5 className="m-0">Don't have an account?</h5>
                      <span>
                        <Link>Sign up</Link>
                      </span>
                    </div>
                  </div>
                  <div className="back-button  d-flex align-items-center gap-4  position-absolute">
                    <div
                      className="d-flex justify-content-center align-items-center"
                      onClick={() => goToPreviousStep("Verifymail")}
                    >
                      <iconify-icon icon="lets-icons:back"></iconify-icon>
                    </div>
                    <h6 className="m-0">Back</h6>
                  </div>
                </div>
              </div>
            )}
            {currentStep === "VerifySignUpMail" && (
              <div className="position-relative">
                <div className="auth-modal-overlay">
                  <div className="blocked-modal-content">
                    <div className="blocked-top d-flex flex-column align-items-center justify-content-center">
                      <div className="close-button" onClick={closeModals}>
                        <iconify-icon icon="akar-icons:cross"></iconify-icon>
                      </div>

                      <div className="block-error d-flex align-items-center justify-content-center">
                        <img
                          src={Verifymail}
                          alt=" Block"
                          className=" img-fluid"
                        />
                      </div>
                      <div className="block-text-button d-flex flex-column justify-content-center align-items-center">
                        <div className="block-text text-center">
                          <h5 className="mb-4">
                            Your mail has been not verified
                          </h5>
                          <h6 className="m-0">
                            To participate in projects, you need to confirm your
                            email. To do this, follow the link from the letter
                            that we sent to <span>usermail@gmail.com</span>{" "}
                          </h6>
                        </div>
                        <div
                          className="account-blocked-button d-flex gap-4 mb-3"
                          style={{ boxShadow: "0px 2px 6px 0px #E5EBF380" }}
                        >
                          <Button
                            text="Resend request"
                            padding="10px 16px"
                            borderRdius="16px"
                            fontSize="16px"
                            fontWeight="500"
                            backgroundColor="#605BFF"
                            Border="1px solid #605BFF"
                            textColor="white"
                            height="40px"
                          />
                          <Button
                            text="Change email"
                            padding="10px 16px"
                            borderRdius="16px"
                            fontSize="16px"
                            fontWeight="500"
                            backgroundColor="transparent"
                            Border="1px solid #605BFF"
                            textColor="#605BFF"
                            height="40px"
                            onClick={() => goToNextStep("emailVerified")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="sigin-bottom d-flex justify-content-center align-items-center">
                      <h5 className="m-0">Don't have an account?</h5>
                      <span>
                        <Link>Sign up</Link>
                      </span>
                    </div>
                  </div>
                  <div className="back-button  d-flex align-items-center gap-4  position-absolute">
                    <div
                      className="d-flex justify-content-center align-items-center"
                      onClick={() => goToPreviousStep("Signup")}
                    >
                      <iconify-icon icon="lets-icons:back"></iconify-icon>
                    </div>
                    <h6 className="m-0">Back</h6>
                  </div>
                </div>
              </div>
            )}
            {currentStep === "emailVerified" && (
              <div className="position-relative">
                <div className="auth-modal-overlay">
                  <div className="blocked-modal-content">
                    <div className="blocked-top d-flex flex-column align-items-center justify-content-center">
                      <div className="close-button" onClick={closeModals}>
                        <iconify-icon icon="akar-icons:cross"></iconify-icon>
                      </div>

                      <div className="block-error d-flex align-items-center justify-content-center">
                        <img
                          src={Verifymail2}
                          alt=" Verifymail2"
                          className=" img-fluid"
                        />
                      </div>
                      <div className="block-text-button d-flex flex-column justify-content-center align-items-center">
                        <div className="block-text text-center">
                          <h5 className="mb-4">Congratulations!</h5>
                          <h6 className="m-0">
                            You have successfully verify your email
                          </h6>
                        </div>
                        <div
                          className="account-blocked-button d-flex gap-4 mb-3"
                          style={{ boxShadow: "0px 2px 6px 0px #E5EBF380" }}
                        >
                          <Button
                            text="Continue"
                            padding="10px 16px"
                            borderRdius="16px"
                            fontSize="16px"
                            fontWeight="500"
                            backgroundColor="#605BFF"
                            Border="1px solid #605BFF"
                            textColor="white"
                            height="40px"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="sigin-bottom d-flex justify-content-center align-items-center">
                      <h5 className="m-0">Don't have an account?</h5>
                      <span>
                        <Link onClick={() => goToNextStep("Signup")}>
                          Sign up
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="back-button  d-flex align-items-center gap-4  position-absolute">
                    <div
                      className="d-flex justify-content-center align-items-center"
                      onClick={() => goToPreviousStep("VerifySignUpMail")}
                    >
                      <iconify-icon icon="lets-icons:back"></iconify-icon>
                    </div>
                    <h6 className="m-0">Back</h6>
                  </div>
                </div>
              </div>
            )}
            {currentStep === "ForgotPassword" && (
              <div className="position-relative">
                <div className="auth-modal-overlay">
                  <div className="modal-content">
                    <div className="signin-top">
                      <div className="close-button" onClick={closeModals}>
                        <iconify-icon icon="akar-icons:cross"></iconify-icon>
                      </div>
                      <h5 className="m-0 text-center">Forgot</h5>
                      <h5 className="mb-3 text-center">your password?</h5>
                      <div className="forgot-text  text-center">
                        <h5 className="mb-3">
                          Enter your email address to request a password reset.
                          You will receive an email with further instructions. ?
                        </h5>
                      </div>
                      <div className="row">
                        <div className="col-lg-12 col-12 mb-3">
                          <div className="signin-input w-100">
                            <input
                              type="text"
                              placeholder="Your E-mail"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="signin-button "
                        style={{ boxShadow: "0px 2px 6px 0px #E5EBF380" }}
                      >
                        <Button
                          text="Request"
                          width="100%"
                          padding="10px 32px"
                          borderRdius="16px"
                          fontSize="16px"
                          fontWeight="500"
                          backgroundColor="#605BFF"
                          Border="1px solid #605BFF"
                          textColor="white"
                          height="56px"
                          onClick={() => goToNextStep("ForgotEmailVerified")}
                        />
                      </div>
                    </div>
                    <div className="sigin-bottom d-flex justify-content-center align-items-center">
                      <h5 className="m-0">Don't have an account?</h5>
                      <span onClick={() => goToNextStep("Signup")}>
                        <Link>Sign up</Link>
                      </span>
                    </div>
                  </div>
                  <div className="back-button  d-flex align-items-center gap-4  position-absolute">
                    <div
                      className="d-flex justify-content-center align-items-center"
                      onClick={() => goToPreviousStep("signin")}
                    >
                      <iconify-icon icon="lets-icons:back"></iconify-icon>
                    </div>
                    <h6 className="m-0">Back</h6>
                  </div>
                </div>
              </div>
            )}
            {currentStep === "ForgotEmailVerified" && (
              <div className="position-relative">
                <div className="auth-modal-overlay">
                  <div className="blocked-modal-content">
                    <div className="blocked-top d-flex flex-column align-items-center justify-content-center">
                      <div className="close-button" onClick={closeModals}>
                        <iconify-icon icon="akar-icons:cross"></iconify-icon>
                      </div>

                      <div className="block-error d-flex align-items-center justify-content-center">
                        <img
                          src={succ}
                          alt=" Verifymail2"
                          className=" img-fluid"
                        />
                      </div>
                      <div className="block-text-button d-flex flex-column justify-content-center align-items-center">
                        <div className="block-text text-center">
                          <h5 className="mb-4">Email sent!!</h5>
                          <h6 className="m-0">
                            An email has been sent to{" "}
                            <span
                              style={{ cursor: "pointer" }}
                              onClick={() => goToNextStep("ResetNewPassword")}
                            >
                              usermail@gmail.com
                            </span>{" "}
                          </h6>
                          <h6 className="m-0">
                            Follow the instructions in the email to reset your
                            password.
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="sigin-bottom d-flex justify-content-center align-items-center">
                      <div
                        className="account-blocked-button d-flex gap-4 mb-3"
                        style={{ boxShadow: "0px 2px 6px 0px #E5EBF380" }}
                      >
                        <Button
                          text="Back to Home page"
                          padding="10px 16px"
                          borderRdius="16px"
                          fontSize="16px"
                          fontWeight="500"
                          backgroundColor="#605BFF"
                          Border="1px solid #605BFF"
                          textColor="white"
                          height="40px"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="back-button  d-flex align-items-center gap-4  position-absolute">
                    <div
                      className="d-flex justify-content-center align-items-center"
                      onClick={() => goToPreviousStep("ForgotPassword")}
                    >
                      <iconify-icon icon="lets-icons:back"></iconify-icon>
                    </div>
                    <h6 className="m-0">Back</h6>
                  </div>
                </div>
              </div>
            )}
            {currentStep === "ResetNewPassword" && (
              <div className="position-relative">
                <div className="auth-modal-overlay">
                  <div className="modal-content">
                    <div className="signin-top">
                      <div className="close-button" onClick={closeModals}>
                        <iconify-icon icon="akar-icons:cross"></iconify-icon>
                      </div>
                      <h5 className="mb-3 text-center">Reset password</h5>
                      <div className="forgot-text  text-center">
                        <h5 className="mb-4">
                          Enter a new password to finish updating your password
                        </h5>
                      </div>
                      <div className="row">
                        <div className="col-lg-12 col-12 mb-3">
                          <h4 className="mb-1">New password</h4>

                          <div className="signin-input w-100 position-relative">
                            <input
                              type="text"
                              placeholder="*********************"
                              required
                            />
                            <div className="signin-eye-icon position-absolute">
                              <iconify-icon icon="fluent:eye-28-regular"></iconify-icon>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12 col-12 mb-3">
                          <h4 className="mb-1">Confirm password</h4>

                          <div className="signin-input w-100 position-relative">
                            <input
                              type="text"
                              placeholder="*********************"
                              required
                            />
                            <div className="signin-eye-icon position-absolute">
                              <iconify-icon icon="teenyicons:eye-closed-solid"></iconify-icon>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="signin-button "
                        style={{ boxShadow: "0px 2px 6px 0px #E5EBF380" }}
                      >
                        <Button
                          text="Reset"
                          width="100%"
                          padding="10px 32px"
                          borderRdius="16px"
                          fontSize="16px"
                          fontWeight="500"
                          backgroundColor="#605BFF"
                          Border="1px solid #605BFF"
                          textColor="white"
                          height="56px"
                          onClick={() => goToNextStep("VerifyNewPasswordMail")}
                        />
                      </div>
                    </div>
                    <div className="sigin-bottom d-flex justify-content-center align-items-center">
                      <h5 className="m-0">Don't have an account?</h5>
                      <span onClick={() => goToNextStep("Signup")}>
                        <Link>Sign up</Link>
                      </span>
                    </div>
                  </div>
                  <div className="back-button  d-flex align-items-center gap-4  position-absolute">
                    <div
                      className="d-flex justify-content-center align-items-center"
                      onClick={() => goToPreviousStep("signin")}
                    >
                      <iconify-icon icon="lets-icons:back"></iconify-icon>
                    </div>
                    <h6 className="m-0">Back</h6>
                  </div>
                </div>
              </div>
            )}
            {currentStep === "VerifyNewPasswordMail" && (
              <div className="position-relative">
                <div className="auth-modal-overlay">
                  <div className="blocked-modal-content">
                    <div className="blocked-top d-flex flex-column align-items-center justify-content-center">
                      <div className="close-button" onClick={closeModals}>
                        <iconify-icon icon="akar-icons:cross"></iconify-icon>
                      </div>

                      <div className="block-error d-flex align-items-center justify-content-center">
                        <img
                          src={succ}
                          alt=" Verifymail2"
                          className=" img-fluid"
                        />
                      </div>
                      <div className="block-text-button d-flex flex-column justify-content-center align-items-center">
                        <div className="block-text text-center">
                          <h5 className="mb-4">
                            You have successfully changed your password!
                          </h5>
                          <h6 className="m-0">Continue to log in</h6>
                        </div>
                        <div
                          className="account-blocked-button d-flex gap-4 mb-3"
                          style={{ boxShadow: "0px 2px 6px 0px #E5EBF380" }}
                        >
                          <Link to="/MainDashboard">
                          <Button
                            text="Continue"
                            padding="10px 16px"
                            borderRdius="16px"
                            fontSize="16px"
                            fontWeight="500"
                            backgroundColor="#605BFF"
                            Border="1px solid #605BFF"
                            textColor="white"
                            height="40px"
                          />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="sigin-bottom d-flex justify-content-center align-items-center">
                      <h5 className="m-0">Don't have an account?</h5>
                      <span>
                        <Link onClick={() => goToNextStep("")}>Sign up</Link>
                      </span>
                    </div>
                  </div>
                  <div className="back-button  d-flex align-items-center gap-4  position-absolute">
                    <div
                      className="d-flex justify-content-center align-items-center"
                      onClick={() => goToPreviousStep("ResetNewPassword")}
                    >
                      <iconify-icon icon="lets-icons:back"></iconify-icon>
                    </div>
                    <h6 className="m-0">Back</h6>
                  </div>
                </div>
              </div>
            )}
            <div className="create-account">
              <Link className="nav-link">Create free account</Link>
            </div>
            <div className="">
              <Link className="nav-link">
                <Button
                  text="Create free account"
                  height="40px"
                  padding="10px 16px"
                  fontSize="14px"
                  fontWeight="500"
                  backgroundColor="transparent"
                  textColor="#605BFF"
                  borderRdius="12px"
                  Border="1px solid #605BFF"
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`off-canvas-card d-flex flex-column align-items-center ${
          isCanvasOpen ? "open" : ""
        }`}
      >
        <div className="d-flex flex-column align-items-center text-center list-unstyled off-canvas-list">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="#">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Features
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              How it works
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Pricing
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              FAQ
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Contact Us
            </Link>
          </li>
          <div className="select-country-box d-flex align-items-center">
            <div className="select-img">
              <img src={Country1} alt="select country" className="img-fluid" />
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
                  <div className="d-flex align-items-center gap-3">
                    <div className="select-img">
                      <img
                        src={Country1}
                        alt="select country"
                        className="img-fluid"
                      />
                    </div>
                    <div className="select-language d-flex align-items-center">
                      <h6 className="m-0">English</h6>
                    </div>
                  </div>
                </div>
                <div className="country-language d-flex align-items-center w-100">
                  <div className="d-flex align-items-center gap-3">
                    <div className="select-img">
                      <img
                        src={Country2}
                        alt="select country"
                        className="img-fluid"
                      />
                    </div>
                    <div className="select-language d-flex align-items-center">
                      <h6 className="m-0">Dutch</h6>
                    </div>
                  </div>
                </div>
                <div className="country-language d-flex align-items-center w-100">
                  <div className="d-flex align-items-center gap-3">
                    <div className="select-img">
                      <img
                        src={Country3}
                        alt="select country"
                        className="img-fluid"
                      />
                    </div>
                    <div className="select-language d-flex align-items-center">
                      <h6 className="m-0">German</h6>
                    </div>
                  </div>
                </div>
                <div className="country-language d-flex align-items-center w-100">
                  <div className="d-flex align-items-center gap-3">
                    <div className="select-img">
                      <img
                        src={Country4}
                        alt="select country"
                        className="img-fluid"
                      />
                    </div>
                    <div className="select-language d-flex align-items-center">
                      <h6 className="m-0">Spanish</h6>
                    </div>
                  </div>
                </div>
                <div className="country-language d-flex align-items-center w-100">
                  <div className="d-flex align-items-center gap-3">
                    <div className="select-img">
                      <img
                        src={Country5}
                        alt="select country"
                        className="img-fluid"
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
      </div>
    </div>
  );
};

export default HomeHeader;
