import React from "react";
import informasi from "../assets/informasi.png";
import BookingIcon from "../assets/Booking Icon.png";
import menupenyewaan from "../assets/menupenyewaan.png";

import { Container } from "react-bootstrap";

const Booking = () => {
  return (
    <Container>
      <div className="d-flex justify-content-center">
        <div className="row mt-3">
          <div className="col-md-12 mt-3">
            <div className="d-flex justify-content-center">
              <img src={informasi} alt="" />
            </div>
          </div>
          <div className="col-md-12 mb-2 mt-3">
            <div className="d-flex justify-content-center">
              <img src={BookingIcon} alt="" width={160}/>
            </div>
          </div>
          <div className="col-md-12 mb-2">
            <div>
              <div className="d-flex justify-content-center">
                <img src={menupenyewaan} />
              </div>

              {/* <img
                src={lanjutkeinformasi}
                alt={lanjutkeinformasi}
                className="lanjutkeinformasi"
                onClick={handleClick}
                style={{ cursor: "pointer" }}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Booking;
