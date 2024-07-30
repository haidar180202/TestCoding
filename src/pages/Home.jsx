import React from "react";

import Booking from "../assets/Booking Icon.png";
import { Link } from "@mui/material";

function Home() {
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-12">
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="mb-4" fontSize={23}>
              Selamat Datang Dibooking Lapangan Kota Palembang
            </h4>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-start">
        <div className="btn btn-outline-primary" style={{ fontSize: "14px" }}>
          <img src={Booking} alt="" width={30} />
          <h6>Booking</h6>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-12">
          <div className="d-flex justify-content-start">
            <h6 className="mb-4" style={{ fontSize: "20px" }}>
              Lapangan Dikota Palembang
            </h6>
          </div>
          <div className="row">
            <div className="col-md-3 mb-4">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <img
                  src="https://i.ibb.co/9Y8j3sF/kamboja.jpg"
                  className="card-img-top"
                  alt="Kamboja"
                  height={180}
                  style={{
                    borderTopLeftRadius: "1rem",
                    borderTopRightRadius: "1rem",
                  }}
                />
                <div className="card-body">
                  <h6
                    className="card-title"
                    style={{
                      backgroundColor: "#F58465",
                      color: "#fff",
                      padding: "5px 10px",
                      fontSize: "10px",
                      borderRadius: "0.5rem",
                    }}
                  >
                    Lapangan Bola Kamboja
                  </h6>
                  <h6 className="card-title">Lapangan Bola Kamboja</h6>
                  <p className="card-text">Mayor Santoso, Palembang</p>
                  <div className="d-flex justify-content-between">
                    <Link
                      to="/"
                      className="text-decoration-none"
                      style={{ fontSize: "14px", color: "#F58465" }}
                    >
                      Lihat Lapangan
                    </Link>
                    <i
                      className="bi bi-arrow-right"
                      style={{ fontSize: "18px" }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <img
                  src="https://i.ibb.co/vXh8438/hattha.jpg"
                  className="card-img-top"
                  alt="Hattha"
                  height={180}
                  style={{
                    borderTopLeftRadius: "1rem",
                    borderTopRightRadius: "1rem",
                  }}
                />
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{
                      backgroundColor: "#F58465",
                      color: "#fff",
                      padding: "5px 10px",
                      fontSize: "10px",
                      borderRadius: "0.5rem",
                    }}
                  >
                    Lapangan Bola Hattha
                  </h5>
                  <h6 className="card-title">Lapangan Bola Hattha</h6>
                  <p className="card-text">Tanae Sava, Palembang</p>
                  <div className="d-flex justify-content-between">
                    <Link
                      to="/"
                      className="text-decoration-none"
                      style={{ fontSize: "14px", color: "#F58465" }}
                    >
                      Lihat Lapangan
                    </Link>
                    <i
                      className="bi bi-arrow-right"
                      style={{ fontSize: "18px" }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <img
                  src="https://i.ibb.co/j5xW8nB/cempako.jpg"
                  className="card-img-top"
                  alt="Cempako"
                  height={180}
                  style={{
                    borderTopLeftRadius: "1rem",
                    borderTopRightRadius: "1rem",
                  }}
                />
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{
                      backgroundColor: "#F58465",
                      color: "#fff",
                      padding: "5px 10px",
                      fontSize: "10px",
                      borderRadius: "0.5rem",
                    }}
                  >
                    Lapangan Bulu Tangkis Cempako
                  </h5>
                  <h6 className="card-title">Lapangan Bulu Tangkis Cempako</h6>
                  <p className="card-text">26 Ilir, Palembang</p>
                  <div className="d-flex justify-content-between">
                    <Link
                      to="/"
                      className="text-decoration-none"
                      style={{ fontSize: "14px", color: "#F58465" }}
                    >
                      Lihat Lapangan
                    </Link>
                    <i
                      className="bi bi-arrow-right"
                      style={{ fontSize: "18px" }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <img
                  src="https://i.ibb.co/j5xW8nB/cempako.jpg"
                  className="card-img-top"
                  alt="Bhakti"
                  height={180}
                  style={{
                    borderTopLeftRadius: "1rem",
                    borderTopRightRadius: "1rem",
                  }}
                />
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{
                      backgroundColor: "#F58465",
                      color: "#fff",
                      padding: "5px 10px",
                      fontSize: "10px",
                      borderRadius: "0.5rem",
                    }}
                  >
                    Lapangan Tenis Bhakti
                  </h5>
                  <h6 className="card-title">Lapangan Tenis Bhakti</h6>

                  <p className="card-text">Jl. Bua Bak, Palembang</p>
                  <div className="d-flex justify-content-between">
                    <Link
                      to="/"
                      className="text-decoration-none"
                      style={{ fontSize: "14px", color: "#F58465" }}
                    >
                      Lihat Lapangan
                    </Link>
                    <i
                      className="bi bi-arrow-right"
                      style={{ fontSize: "18px" }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-12">
          <div className="d-flex justify-content-between">
            <h6>Berkas terbaru</h6>
            <Link
              to="/"
              className="text-decoration-none"
              style={{ fontSize: "14px", color: "#F58465", fontWeight: "bold" }}
            >
              Lihat Semua
            </Link>
          </div>

          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="card">
                <div className="card-header">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <p className="mb-0" style={{ fontSize: "12px" }}>
                        Harry Maguire, S.Kom
                      </p>
                      <p className="mb-0" style={{ fontSize: "10px" }}>
                        24 Januari 2024, 18:28
                      </p>
                    </div>
                    <div>
                      <p className="mb-0" style={{ fontSize: "12px" }}>
                        S1
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h5 className="card-title">Lapangan Bola Kamboja</h5>
                      <p className="card-text">Sen 1 06:00 - 12:00</p>
                    </div>
                    <div>
                      <button
                        className="btn btn-primary"
                        style={{ fontSize: "12px" }}
                      >
                        On progress
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      
    </div>
  );
}

export default Home;
