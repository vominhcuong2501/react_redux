import React, { Component } from "react";
import {connect} from "react-redux";

class Computer extends Component {
  render() {
    let keyframe = `@keyframes randomItem${Date.now()} {
        0% {top: -50px}
        25% {top: 100px}
        50% {top: -50px}
        75% {top: 100px}
        100% {top: 0px}
    }`
    return (
      <div className="text-center playGame">
        <style>
            {keyframe}
        </style>
        <div className="theThink" style={{ overflow:'hidden', position: 'relative'}}>
          <img
          style={{position: 'absolute', left: '30%', animation: `randomItem${Date.now()} 0.5s`}}
          className="mt-3"
            src={this.props.computer.hinhAnh}
            alt={this.props.computer.hinhAnh}
            height={60}
            width={60}
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          src="./ImgOanTuXi/playerComputer.png"
          alt="computer"
          height={200}
          width={200}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
    return {
        computer: state.OanTuXiReducer.computer
    }
}
export default connect(mapStateToProps, null)(Computer)