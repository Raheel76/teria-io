import React from "react";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const AccountBlocked = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className=" position-relative">
        <div className="signin-modal-overlay ">
          <div className="modal-content">
            <div className="signin-top">
              <div className="close-button" >
                <iconify-icon icon="akar-icons:cross"></iconify-icon>
              </div>
              <h5 className="mb-3">AccountBlocked</h5>
              <div className=" row">
                <div className="col-lg-12 col-12 mb-3">
                  <div className="signin-input w-100">
                    <input type="text" placeholder="Login" required />
                  </div>
                </div>
                <div className="col-lg-12 col-12 mb-3">
                  <div className="signin-input w-100 position-relative">
                    <input type="text" placeholder="Password" required />
                    <div className="signin-eye-icon position-absolute">
                      <iconify-icon icon="fluent:eye-28-regular"></iconify-icon>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sign-in-check d-flex align-items-center mb-3 gap-2">
                <div class="form-check">
                  <input
                    class="form-check-input"
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
                <Link to="/">
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
                </Link>
              </div>
              <Link className=" text-decoration-none">
                <h4 className="m-0 text-center">Fogot password</h4>
              </Link>
            </div>
            <div className="sigin-bottom d-flex justify-content-center align-items-center">
              <h5 className="m-0">Don't have an account?</h5>
              <span>
                <Link>Sign up</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountBlocked;
