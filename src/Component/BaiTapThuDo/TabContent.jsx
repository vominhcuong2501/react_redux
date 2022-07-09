import React, { Component } from "react";
import clothes from "../../Data/clothes.json";
import { connect } from "react-redux";
class TabContent extends Component {
  renderMenu = () => {
    return clothes.tabPanes.filter(ele => ele.type === this.props.selectedType).map((ele) => {
      const {imgSrc_png, imgSrc_jpg, id, name, type} = ele
      return (
        <div className="col-md-3 mb-4" key={id}>
          <div className="card text-center">
            <img src={imgSrc_jpg} />
            <h4>
              <b>{name}</b>
            </h4>
            <button
              className="btn btn-success"
              onClick={() => this.props.dispatch({
                type: "CHANGE_CLOTHES",
                payload: {type, imgSrc_png}
              })}
            >
              Thử đồ
            </button>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="well mt-2 p-5">
        <div className="tab-content">
          <div className="tab-pane container active">
            <div className="container">
              <div className="row">{this.renderMenu()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(state => ({...state.thuDoReducer}))(TabContent)