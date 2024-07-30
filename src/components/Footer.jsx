import React from 'react'

function Footer() {
  return (
    <div className="container">
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
              <i
                className="bi bi-geo-alt-fill"
                style={{ fontSize: "20px" }}
              ></i>
              <p className="mb-0" style={{ fontSize: "14px" }}>
                Pemesanan
              </p>
              <p className="mb-0" style={{ fontSize: "12px" }}>
                Kota Palembang
              </p>
            </div>
            <div className="d-flex align-items-center me-3">
              <i
                className="bi bi-house-door-fill"
                style={{ fontSize: "20px" }}
              ></i>
              <p className="mb-0" style={{ fontSize: "14px" }}>
                Dinas Kebudayaan dan Pariwisata Kota Palembang
              </p>
            </div>
            <div className="d-flex align-items-center">
              <img
                src="https://i.ibb.co/F4n26j2/logo.png"
                alt="Logo"
                className="img-fluid"
                style={{ width: "30px", height: "30px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer