import React, { Component, PureComponent } from 'react';

// thay vì dùng shouldComponentUpdate để kt , ta sử dụng PureComponent nò sẽ render lại nếu props thay đổi.
// Tuy nhiên PureComponent sẽ kt dược nếu ta thay đổi state là string, number. Nếu là Object hay array thì không kt được

export default class Child extends PureComponent {

    // search reactjs.org tìm hiểu thêm
    componentWillReceiveProps(nextProps) {
        // cần sử dụng khi kiểm tra props cũ và props mới
        console.log("componentWillReceiveProps");
    }


    // shouldComponentUpdate(nextProps) {
    //     // quyết dịnh khi nào component được update dể render lại dựa vào true/false
    //     if(this.props.a !== nextProps.a) {
    //         return true;
    //     }
    //     return false;
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate");
    }

    render() {
        console.log("render");
        return (
        <div>Child</div>
        )
    }

    componentDidUpdate(prevProps){
        console.log("componentDidUpdate");
    }

}
