import React, { Component } from "react";
import danhSachDataGhe from "../../Data/danhSachGhe.json";
import { connect } from "react-redux";

class HangGhe extends Component {
  renderNumber = () => {
    // render số ghế hàng đầu 
    let numberChair = danhSachDataGhe.map((item) => {
      if (item.hang === "") {
        let mangSo = [];
        for (let i = 0; i < item.danhSachGhe.length; i++) {
          mangSo.push(
            <th
              className="rowNumber text-center"
              key={item.danhSachGhe[i].soGhe}
            >
              {item.danhSachGhe[i].soGhe}
            </th>
          );
        }
        return mangSo;
      }
    });
    return numberChair;
  };

  renderHangGhe = () => {
    let stringChair = danhSachDataGhe.map((item, index) => {
      // render cột chữ đầu
      if (item.hang !== "") {
        let mangChu = [];
        mangChu.push(
          <td key={item.hang} className="rowNumber">
            {item.hang}
          </td>
        );

        for (let i = 0; i < item.danhSachGhe.length; i++) {
          // xét ghế đã đặt
          let cssGheDaChon = "";
          let disabled = false;
          if (item.danhSachGhe[i].daDat) {
            cssGheDaChon = "gheDuocChon";
            disabled = true;
          }

          // xét ghế đang đặt
          let cssGheDangChon = "";
          let indexGheDangChon = this.props.mangGheDangDat.findIndex(
            (gheDangDat) => gheDangDat.soGhe === item.danhSachGhe[i].soGhe
          );
          if(indexGheDangChon !== -1) {
            cssGheDangChon = "gheDangChon";
          }

          // render chữ số ghế
          mangChu.push(
            <td key={item.danhSachGhe[i].soGhe}>
              <button
                onClick={() =>
                  this.props.dispatch({
                    type: "DAT_GHE",
                    payload: item.danhSachGhe[i],
                  })
                }
                disabled={disabled}
                className={`ghe ${cssGheDaChon} ${cssGheDangChon}`}
              >
                {item.danhSachGhe[i].soGhe}
              </button>
            </td>
          );
        }
        return <tr key={index}>{mangChu}</tr>;
      }
    });
    return stringChair;
  };

  render() {
    return (
      <div style={{ padding: "0 100px" }}>
        <table className="table" style={{ border: "none" }}>
          <thead>
            <tr>
              <td></td>
              {this.renderNumber()}
            </tr>
          </thead>
          <tbody>{this.renderHangGhe()}</tbody>
        </table>
      </div>
    );
  }
}
export default connect((state) => ({ ...state.BookingTicketReducer }))(HangGhe);
