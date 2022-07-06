import React, { Component } from "react";
import Profile from "./Profile";

export default class DemoPureComponent extends Component {
    state = {
        like: 0
    }
    likeImage = () => {
        let likeHT = this.state.like + 1;
        this.setState ({
            like: likeHT
        })
    }

  render() {
    return (
      <div className="container">
        <h3>Profile</h3>
        <Profile like={this.state.like}/>
        <div className="card  text-white bg-light mt-3" >
          <h3 style={{color: 'red'}}>Số lượt thả tim ({this.state.like}) </h3>
          <div className="card-body">
            <button className="btn " style={{color: 'red', border: '3px solid red'}} onClick={()=> {this.likeImage()}}>Like <i class="fa-regular fa-heart"></i></button>
          </div>
        </div>
      </div>
    );
  }
}
