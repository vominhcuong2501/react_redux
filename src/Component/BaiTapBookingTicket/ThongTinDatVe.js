import React, { Component } from "react";
import { connect } from "react-redux";

class ThongTinDatVe extends Component {
  renderThongTin = () => {
    return this.props.mangGheDangDat.map((ele, index) => {
      return (
        <tr key={index} className="text-warning">
          <td>{ele.soGhe}</td>
          <td>{ele.gia}</td>
          <td>
            <a
              className="text-danger"
              style={{ fontSize: 20, cursor: "pointer" }}
              onClick={() =>
                this.props.delete(
                 ele.soGhe,
                )
              }
            >
              X
            </a>
          </td>
        </tr>
      );
    });
  };
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
        <table className="table" style={{ fontSize: 20 }} border={2}>
          <thead>
            <tr className="text-light" style={{ fontSize: "25px" }}>
              <th>Ghế</th>
              <th>Giá tiền</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderThongTin()}</tbody>
          <tfoot>
            <tr className="text-light">
              <td>Tổng tiền</td>
              <td>
                {this.props.mangGheDangDat
                  .reduce((tongTien, ele) => {
                    return (tongTien += ele.gia);
                  }, 0)
                  .toLocaleString()}{" "}
                VNĐ
              </td>
            </tr>
          </tfoot>
        </table>
        {/* <div className="text-right">
          <button
            className="btn btn-success"
            onClick={() => this.props.datVe(this.props.mangGheDangDat)}
          >
            Đặt vé
          </button>
        </div> */}
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    // datVe: (item) => {
    //   dispatch({
    //     type: "DAT_VE",
    //     payload: item,
    //   });
    // },
    delete: (soGhe) => {
      dispatch({
        type: "XOA_GHE",
        payload: soGhe,
      });
    },
  };
};
export default connect(
  (state) => ({ ...state.BookingTicketReducer }),
  mapDispatchToProps
)(ThongTinDatVe);
