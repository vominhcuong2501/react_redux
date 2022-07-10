import React, { Component } from "react";
import danhSachDataGhe from "../../Data/danhSachGhe.json";

export default class HangGhe extends Component {
  renderNumber = () => {
    let numberChair = danhSachDataGhe.map((item, index) => {
      if (item.hang === "") {
        let mangSo = [];
        for (let i = 0; i < item.danhSachGhe.length; i++) {
          mangSo.push(
            <th className="rowNumber text-center" key={item.danhSachGhe[i].soGhe}>
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
        if (item.hang !== "") {
          let mangChu = [];
          mangChu.push(<td key={item.hang} className="rowNumber">{item.hang}</td>)
          for (let i = 0; i < item.danhSachGhe.length; i++) {
            let cssGheDaChon = '';
            let disabled = false;
            if(item.danhSachGhe[i].daDat) {
              cssGheDaChon = "gheDuocChon";
              disabled = true;
            }
            mangChu.push(
              <td key={item.danhSachGhe[i].soGhe}>
                <button disabled={disabled} className={`ghe ${cssGheDaChon}`}>{item.danhSachGhe[i].soGhe}</button>
              </td>
            );
          }
          return (<tr key={index}>{mangChu}</tr>);
        }
      });
      return stringChair;
    };
  

  render() {
    return (
      <div style={{padding: '0 100px'}}>
        <table className="table" style={{border: 'none'}}>
        <thead>
          <tr>
            <td></td>
            {this.renderNumber()}
          </tr>
        </thead>
        <tbody>
        {this.renderHangGhe()}
        </tbody>
      </table>
      </div>
    );
  }
}
