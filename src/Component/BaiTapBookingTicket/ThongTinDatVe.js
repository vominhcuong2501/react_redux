import React, { Component } from "react";

export default class ThongTinDatVe extends Component {
  render() {
    return (
      <div>
        <h3 className="text-info text-center">Thông tin đặt vé</h3>
        <div className="mb-3" style={{ fontSize: "20px" }}>
          <button className="gheDuocChon"></button> <span>Ghế được đặt</span>
          <br />
          <button className="gheDangChon my-1"></button>{" "}
          <span>Ghế được đặt</span>
          <br />
          <button className="gheTrong"></button> <span>Ghế được đặt</span>
          <br />
        </div>
        <table className="table" border={2}>
          <thead>
            <tr className="text-light" style={{ fontSize: "25px" }}>
              <th>Ghế</th>
              <th>Giá tiền</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{/* {this.renderThongTin()} */}</tbody>
          <tfoot>
            <tr className="text-light">
              <td>Tổng tiền</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}
