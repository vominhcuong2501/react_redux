import React, { Component, PureComponent } from "react";

export default class Profile extends PureComponent {
  render() {
    console.log("load");

    return (
        <div className="card text-white bg-dark" style={{width: 300}}>
          <img className="card-img-top" style={{width: 235, height: 300}} src="https://nguoinoitieng.tv/images/nnt/0/0/ak.jpg"/>
          <div className="card-body">
            <h4 className="card-title">Tên: Mỹ Dung</h4>
            <p className="card-text">Tuổi: 30</p>
            <p>Số lượt thích: {this.props.like}</p>
          </div>
        </div>
    );
  }
}
