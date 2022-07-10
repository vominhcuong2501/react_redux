import React, { Component } from "react";
import "./BaiTapBookingTicket.css";
import ThongTinDatVe from "./ThongTinDatVe";
import danhSachDataGhe from "../../Data/danhSachGhe.json";
import HangGhe from "./HangGhe";

export default class BaiTapBookingTicket extends Component {
  render() {
    return (
      <div
        className="container-fluid bookingMovie bgMovie p-0"
        style={{
          backgroundImage: "url(./images/bgmovie.jpg)",
          width: "100%",
          height: "100%",
          backgroundSize: "100%",
          position: "fixed",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            position: "fixed",
            width: "100%",
            height: "100%",
          }}
        >
          <h1 className="text-center text-warning mt-3">BÀI TẬP ĐẶT VÉ</h1>
          <div className="row">
            <div className="col-8">
              <div style={{paddingRight: 30}}>
                <div className="screen my-3 mx-auto">
                  <p
                    className="text-center"
                    style={{
                      position: "absolute",
                      right: "50%",
                      transform: "translatex(50%)",
                    }}
                  >
                    Màn hình
                  </p>
                </div>

                <HangGhe />
              </div>
            </div>
            <div className="col-4 text-light pr-5">
              <ThongTinDatVe />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
