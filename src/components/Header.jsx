import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="d-flex justify-content-between ">
            <img src={logo} alt="Logo" className="img-fluid" width={240} />
            <div className="d-flex align-items-center">
              <Link to="#" className="text-decoration-none me-3">
                <i className="bi bi-cart-fill" style={{ fontSize: "20px" }}></i>
              </Link>
              <Link to="#" className="text-decoration-none me-3">
                <i className="bi bi-bell-fill" style={{ fontSize: "20px" }}></i>
              </Link>

              <div className="d-flex align-items-center">
                <img
                  src="https://i.ibb.co/0m7jY7m/profile.png"
                  alt="Profile"
                  className="img-fluid rounded-circle me-2"
                  style={{ width: "30px", height: "30px" }}
                />
                <div>
                  <p className="mb-0" style={{ fontSize: "12px" }}>
                    Harry Maguire, S.Kom
                  </p>
                  <p className="mb-0" style={{ fontSize: "10px" }}>
                    121212121212121212121
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
