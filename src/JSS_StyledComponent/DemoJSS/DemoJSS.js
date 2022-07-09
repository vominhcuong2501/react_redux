import React, { Component } from "react";
import { Button, SmallButton } from "../ComponentsLyThuyet/Buttons";
import { StyledLink } from "../ComponentsLyThuyet/Link";
import { TextField } from "../ComponentsLyThuyet/TextField";

export default class DemoJSS extends Component {
  render() {
    return (
      <div>
        {/* Truyền prop và đặt class cho thẻ */}
        <Button className="button_style" bgPrimary fontsize2x>
          Hi Cường
        </Button>
        {/* Tính kế thừa */}
        <SmallButton>Hello Cường</SmallButton>
        <StyledLink>hi Thuận</StyledLink>
        <TextField input='green'/>
      </div>
    );
  }
}
