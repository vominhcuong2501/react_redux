import React, { Component } from "react";
import { connect } from "react-redux";

class Players extends Component {
  renderItem = () => {
    return this.props.mangDatCuoc.map((item) => {
      let border = {};
      if (item.datCuoc) {
        border = { border: "2px solid orange" };
      }
      return (
        <button style={border} className="btnItem" key={item.ma} onClick={() => this.props.datCuoc(item.ma)}>
          <img src={item.hinhAnh} alt={item.hinhAnh} height={40} width={40} />
        </button>
      );
    });
  };
  render() {
    return (
      <div>
        <div className="theThink">
          <img
            className="mt-3"
            src= {
              this.props.mangDatCuoc.find((item) => item.datCuoc === true)
                .hinhAnh
            }
            height={60}
            width={60}
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          src="./ImgOanTuXi/player.png"
          alt="/ImgOanTuXi/player.png"
          height={200}
          width={200}
        />
        <div className="row keoBuaBao">{this.renderItem()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangDatCuoc: state.OanTuXiReducer.mangDatCuoc,
  };
};

const mapDispatchToProps = dispatch => {
    return {
        datCuoc: (macuoc) => {            
            dispatch({
                type: 'CHON_KEO_BUA_BAO',
                macuoc
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Players);
