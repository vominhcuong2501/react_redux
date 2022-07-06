import React, { Component } from "react";
import "./UserProfile.css";
import Swal from "sweetalert2";

// onchange js là khi ta nhập rồi click cái khác nó sẽ submit
// onchange react là nó submit trong lúc ta nhập dữ liệu

export default class UserProfile extends Component {
  state = {
    values: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    errors: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  };

  handleChangeValue = (event) => {
    // event là thuộc tính mang trạng thái của input
    // lấy value thì event.taget.value
    // lấy name thì event.taget.name
    let { name, value, type } = event.target;

    // tính năng của es6 là xét động về mặt thuộc tính ( ô input nào thay đổi ứng với name của ô đó)
    let newValue = { ...this.state.values, [name]: value };
    let newError = { ...this.state.errors };

    if (value.trim() === "") {
      newError[name] = name + " is required !!! ";
    } else {
      newError[name] = "";
    }

    if (type === "email") {
      const regexEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
      if (!regexEmail.test(value)) {
        // nếu email không hợp lệ
        newError[name] = name + " is invalid !!! ";
      } else {
        // nếu email hợp lệ
        newError[name] = "";
      }
    }

    if (name === "confirmPassword") {
      if (value === newValue["password"]) {
        newError[name] = "";
      } else {
        newError[name] = name + " is invalid !!!";
      }
    }

    this.setState({
      values: newValue,
      errors: newError,
    });
  };

  handleSubmit = (event) => {
    // cản trình duyệt reload lại trang
    event.preventDefault();

    // xét dk khi submit
    let { values, errors } = this.state;

    // biến xác định errors hợp lệ
    let valid = true;

    // sử dụng thư viện để alert ta search: sweetalert2
    // 1. cài nom install sweetalert2 hay cài cdn
    // 2. chọn loại alert
    // 3. dặt biến
    let profileContent = "";
    let errorContent = "";

    for (let key in values) {
      console.log(key);
      if (values[key] === "") {
        errorContent += `
        <p class='text-left'><b class='text-danger'>${key}: is invalid </b></p>`;
        valid = false;
      }
      profileContent += `
      <p class='text-left'><b>${key}: </b>${values[key]}</p>`;
    }

    for (let key in errors) {
      if (errors[key] !== "") {
        errorContent += `
        <p class='text-left'><b class='text-danger'>${key}: is invalid </b></p>`;
        valid = false;
      }
    }

    if (!valid) {
      Swal.fire({
        title: "Your information!",
        html: errorContent,
        icon: "error", // success, error, warning, question
        confirmButtonText: "cancel",
      });
      return;
    }

    Swal.fire({
      title: "Your information!",
      html: profileContent,
      icon: "success", // success, error, warning, question
      confirmButtonText: "ok",
    });
  };

  render() {
    return (
      <div
        className="container-fluid mt-5"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <form className="w-50 bg-light p-5" onSubmit={this.handleSubmit}>
          <h1 className="text-center mb-5">User profile</h1>
          <div>
            <div className="row">
              <div className="col-6">
                <div className="group">
                  <input
                    type="text"
                    value={this.state.values.firstName}
                    name="firstName"
                    required
                    onChange={this.handleChangeValue}
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>First Name</label>
                  <span className="text text-danger">
                    {this.state.errors.firstName}
                  </span>
                </div>
              </div>
              <div className="col-6">
                <div className="group">
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={this.state.values.lastName}
                    onChange={this.handleChangeValue}
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>Last Name</label>
                  <span className="text text-danger">
                    {this.state.errors.lastName}
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="group">
                  <input
                    type="text"
                    name="userName"
                    className="w-100"
                    required
                    value={this.state.values.userName}
                    onChange={this.handleChangeValue}
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>User Name</label>
                  <span className="text text-danger">
                    {this.state.errors.userName}
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="group">
                  <input
                    type="email"
                    name="email"
                    className="w-100"
                    required
                    value={this.state.values.email}
                    onChange={this.handleChangeValue}
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>Email</label>
                  <span className="text text-danger">
                    {this.state.errors.email}
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="group">
                  <input
                    type="password"
                    name="password"
                    required
                    value={this.state.values.password}
                    onChange={this.handleChangeValue}
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>Password</label>
                  <span className="text text-danger">
                    {this.state.errors.password}
                  </span>
                </div>
              </div>
              <div className="col-6">
                <div className="group">
                  <input
                    type="password"
                    name="confirmPassword"
                    required
                    value={this.state.values.confirmPassword}
                    onChange={this.handleChangeValue}
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>Confirm password</label>
                  <span className="text text-danger">
                    {this.state.errors.confirmPassword}
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <button
                className="btn btn-primary w-100 h-30 mt-5 col-12"
                style={{ fontSize: 30 }}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
