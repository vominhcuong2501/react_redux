import React, { Component } from "react";
import "./BaiTapOanTuXi.css";
import Computer from "./Computer";
import Players from "./Players";
import ThongTinTroChoi from "./ThongtinTroChoi";
import { connect } from "react-redux";

class BaiTapOanTuXi extends Component {
  render() {
    return (
      <div className="gameOanTuXi">
        <div className="row text-center mt-3">
          <div className="col-4">
            <Players />
          </div>
          <div className="col-4">
            <ThongTinTroChoi />
            <button
              className="btn btn-info mt-3"
              onClick={() => this.props.playGame()}
            >
              Play game
            </button>
          </div>
          <div className="col-4">
            <Computer />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let count = 0;
      // khai báo hàm lặp đi lặp lại
      let randomComputerItem = setInterval(() => {
        dispatch({
          type: "RAN_DOM",
        });
        count++;
        if( count >= 10) {
          // hàm dừng lặp lại
          clearInterval(randomComputerItem);
          dispatch({
            type: 'END_GAME'
          })
        }
      }, 150);

    },
  };
};
export default connect(null, mapDispatchToProps)(BaiTapOanTuXi);
