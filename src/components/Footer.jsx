import React from 'react'
import logo1 from "../assets/Group 3182.png";
import logo2 from "../assets/Group 3183.png";
import logo3 from "../assets/Group 3187.png";

function Footer() {
  return (
    
      <div className="row mt-4">
        <div className="col-md-12">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              backgroundColor: "#008CBA",
              color: "#fff",
              padding: "10px",
            }}
          >
            <div className="d-flex align-items-center me-3">
              {/* <i
                className="bi bi-geo-alt-fill"
                style={{ fontSize: "20px" }}
              ></i>
              <p className="mb-0" style={{ fontSize: "14px" }}>
                Pemesanan
              </p>
              <p className="mb-0" style={{ fontSize: "12px" }}>
                Kota Palembang
              </p> */}
              <img src={logo1} alt="" width={190}/>
            </div>
            <div className="d-flex align-items-center me-3">
                <img src={logo2} alt="" width={190}/>
            </div>
            <div className="d-flex align-items-center">
            <img src={logo3} alt="" width={150}/>
            </div>

          </div>
        </div>
      </div>
    
  )
}

export default Footer