import styled, { ThemeProvider } from "styled-components";
import React, { Component } from 'react';

const configDarkTheme = {
    background: "#000",
    color: "#FFF",
    fontSize: '15px',
    fontWeight: 'bold'
  };
  const configLightTheme = {
    background: "#EEE",
    color: "#000",
    fontSize: '25px',
    fontWeight: '500'
  };

export default class DemoTheme extends Component {
    state = {
        currentTheme: configDarkTheme
    }

    handleChangeTheme = (event) => {
        this.setState({
            currentTheme: event.target.value == "1" ? configDarkTheme : configLightTheme
        })
    }

  render() {
      const DivStyled = styled.div`
        color: ${props => props.theme.color};
        padding: 20px;
        background: ${props => props.theme.background};
        font-size: ${props => props.theme.fontSize};
        font-weight: ${props => props.theme.fontWeight};
      `
      return (
        <ThemeProvider theme={this.state.currentTheme}>
          <DivStyled>I'm Natalya</DivStyled>
          <select onChange={this.handleChangeTheme}>
            <option value="1">Dark theme</option>
            <option value="2">Light theme</option>
          </select>
        </ThemeProvider>
      );
  }  
}
