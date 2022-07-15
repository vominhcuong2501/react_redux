import React, { Component } from "react";
import DataGlasses from "../../Data/DataGlasses.json";

export default class BaiTapThuKinh extends Component {
  state = {
    glassCurrent: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };
  renderGlassesList = () => {
    return DataGlasses.map((item) => {
      return (
        <div key={item.name} className="col-3 text-center mt-3">
          <img
            onClick={() => this.changeGlass(item)}
            src={item.url}
            width={110}
            style={{cursor: 'pointer'}}
          ></img>
        </div>
      );
    });
  };

  changeGlass = (newGlass) => {
    this.setState({
      glassCurrent: newGlass,
    });
  };
  render() {
    const keyFrame = `@keyframes animChangeGlasses${Date.now()} {
        from {
            width: 0px;
            transform: rotate(45deg);
            opacity: 0
        }
        to {
            width: 180px;
            transform: rotate(0deg);
            opacity: 0.8
        }
    }`;
    const styleGlasses = {
        position: "absolute",
        left: "300px",
        top: "102px",
        opacity: "0.8",
        animation: `animChangeGlasses${Date.now()} 0.5s`,
        width: '180px',
        height: '50px',
        transform: 'rotate(0deg)',
        opacity: '0.8'

      }

    const styleInfoGlass = {
      position: "absolute",
      textAlign: "left",
      left: "216px",
      backgroundColor: "rgba(00,0,0,0.5)",
      color: "white",
      fontWeight: "bold",
      width: "350px",
      padding: "0 20px",
      bottom: "0",
    };

    return (
      <div
        style={{
          backgroundImage: "url(./glassesImage/background-fashion.jpg)",
          height: "100%",
          width: "100%",
          position: "fixed",
        }}
      >
        <style>{keyFrame}</style>
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.2)",
            width: "100%",
            height: "100%",
          }}
        >
          <h1
            style={{ backgroundColor: "rgba(0,0.0,0.8)" }}
            className="text-light text-center py-3"
          >
            TRY GLASS APP ONLINE
          </h1>
          <div className="container-fuild">
            <div className="row text-center mt-3">
              <div className="col-6 ">
                <img
                  src="./glassesImage/model.jpg"
                  height={400}
                  width={350}
                ></img>
                <img
                  style={styleGlasses}
                  src={this.state.glassCurrent.url}
                ></img>
                <div style={styleInfoGlass}>
                  <p className="text-info m-0" style={{ fontSize: "25px" }}>
                    {this.state.glassCurrent.name}
                  </p>
                  <p>{this.state.glassCurrent.desc}</p>
                </div>
              </div>
              <div className="col-6">
                <img
                  src="./glassesImage/model.jpg"
                  height={400}
                  width={350}
                ></img>
              </div>
            </div>
            <div
              className="container"
              style={{ maxWidth: 1035, padding: "20px" }}
            >
              <div className="row ">{this.renderGlassesList()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
