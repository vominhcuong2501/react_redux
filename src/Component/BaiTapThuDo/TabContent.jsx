import React, { Component } from "react";
import {connect} from 'react-redux';

// .filter(ele => ele.type === this.props.categories.type)
class TabContent extends Component {
  renderMenu = () => {
    return this.props.categories.map(ele=> {
      return (
        <div className="col-md-3 mb-4" key={ele.id}>
          <div className="card text-center" >
            <img src={ele.imgSrc_jpg} />
            <h4>
              <b>{ele.name}</b>
            </h4>
            <button className="btn btn-success" onClick={() => this.props.chonDo(ele)}>Thử đồ</button>
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

const mapStateToProps = state => {
  return {
    categories: state.thuDoReducer.categories,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    chonDo: (clothes) => {
      dispatch({
        type: "CHON_DO",
        payload: {
          type: clothes.type,
          img: clothes.imgSrc_png
        }
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TabContent)