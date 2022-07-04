import React, { Component } from 'react';
import { connect } from 'react-redux';
class ThongTinTroChoi extends Component {
  render() {
    return (
      <div>
        <div className='display-4 text-warning'>{this.props.ketQua}</div>
        <div className='display-4 text-primary'>Số bàn thắng: <span className='text-success'>{this.props.soBanThang}</span> </div>
        <div className='display-4 text-primary'>Số bàn chơi: <span  className='text-success'>{this.props.soBanChoi}</span></div>

      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    soBanThang: state.OanTuXiReducer.soBanThang,
    soBanChoi: state.OanTuXiReducer.soBanChoi,
    ketQua: state.OanTuXiReducer.ketQua,

  }
}
export default connect(mapStateToProps, null)(ThongTinTroChoi)

