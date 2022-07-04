import React, { Component } from 'react'
import Child from './Child';

export default class Parent extends Component {
    // Đây là nhũng thuộc tính ban dầu khi chạy component.
    // Lifecycle chỉ chạy trên ClassComponent không chạy trên FunctionComponent

    constructor(props) {
        super(props);
        console.log("constructor");
        this.state = {
            state1: 1,
            state2: 1
        }
      };
    
      componentWillUnmount(){
        console.log("componentWillUnmount");
      }
    
      render() {
        console.log("render");
        return (
          <div>Parent
            <Child a={this.state.state1}/>
            <button className='btn btn-info' onClick={() => this.setState({state1: this.state.state1 + 1})}>Change state 1</button>
            <button className='btn btn-warning' onClick={() => this.setState({state2: this.state.state2 + 1})}>Change state 2</button>
          </div>
          
        )
      }
    
      componentDidMount() {
        // Mục đích: viết logic muốn thực hiện khi component khởi tạo
        // Ưu diểm:
        // + tăng hiệu suất trang web lên 
        // + Load nhanh hơn - vì DidMount nằm sau render khi DidMount chạy thì giao diện đã được render rồi

        // Nhược điểm: ví dụ fetch data 
        // + không được để ở render (cấm kị) vì khi lấy data từ api về xong thực hiện các thao rồi setstate lại. Mỗi lần setState sẽ render lại như thế tạo ra vòng lặp vô tận 
        // + không để ở WillMount từ phiên bản 17 trở di những lifecycle ở WillMount sẽ bỏ hết và giao diện sẽ bị giật vì chạy trước render
        console.log("componentDidMount");
      }
}

