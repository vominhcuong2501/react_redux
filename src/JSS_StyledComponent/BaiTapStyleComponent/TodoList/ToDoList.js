import React, { Component } from "react";
import { Container } from "../../ComponentToDoList/Container";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
} from "../../ComponentToDoList/Heading";
import { ThemeProvider } from "styled-components";
import { ToDoListDarkTheme } from "../../Themes/ToDoListDarkTheme";
import { ToDoListLightTheme } from "../../Themes/ToDoListLightTheme";
import { ToDoListPrimaryTheme } from "../../Themes/ToDoListPrimaryTheme";
import { Dropdown } from "../../ComponentToDoList/Dropdown";
import { TextField, Label, Input } from "../../ComponentToDoList/TextField";
import { Button } from "../../ComponentToDoList/Button";
import { Table, Tbody, Thead, Tr, Th, Td } from "../../ComponentToDoList/Table";
import { connect } from "react-redux";
import {
  addTaskAction,
  changeThemeAction,
  deleteTaskAction,
  doneTaskAction,
  editTaskAction,
  updateTaskAction,
} from "../../../Store/Actions/TodoListAction";
import { arrayTheme } from "../../Themes/ThemeManager";

class ToDoList extends Component {
  state = {
    taskName: "",
    disabled: true,
  };

  // render to do
  renderTaskToDo = () => {
    return this.props.taskList
      .filter((task) => !task.done)
      .map((task) => {
        return (
          <Tr key={task.id}>
            <Th style={{ verticalAlign: "middle" }}>{task.taskName}</Th>
            <Th className="text-right">
              <Button
                onClick={() => {
                  this.setState(
                    {
                      disabled: false,
                    },
                    () => {
                      this.props.dispatch(editTaskAction(task));
                    }
                  );
                }}
              >
                <i className="fa fa-edit"></i>
              </Button>
              <Button
                onClick={() => this.props.dispatch(doneTaskAction(task.id))}
                className="mx-1"
              >
                <i className="fa fa-check"></i>
              </Button>
              <Button
                onClick={() => this.props.dispatch(deleteTaskAction(task.id))}
              >
                <i className="fa fa-trash"></i>
              </Button>
            </Th>
          </Tr>
        );
      });
  };

  // render completed
  renderTaskCompeletd = () => {
    return this.props.taskList
      .filter((task) => task.done)
      .map((task) => {
        const { id, taskName } = task;
        return (
          <Tr key={id}>
            <Th style={{ verticalAlign: "middle" }}>{taskName}</Th>
            <Th className="text-right">
              <Button
                onClick={() => this.props.dispatch(deleteTaskAction(task.id))}
              >
                <i className="fa fa-trash"></i>
              </Button>
            </Th>
          </Tr>
        );
      });
  };

  // render ?? selected theme
  renderTheme = () => {
    return arrayTheme.map((theme) => {
      return (
        <option key={theme.id} value={theme.id}>
          {theme.name}
        </option>
      );
    });
  };

  // lifecycle b???ng 16 nh???n props m???i ???????c th???c thi tr?????c render
  // componentWillReceiveProps(newProps) {
  //   console.log("this.props", this.props);
  //   console.log("newProps", newProps);
  //   this.setState({
  //     taskName: newProps.taskEdit.taskName
  //   })
  // }

  // lifecycle t??nh kh??ng truy xu???t ???????c con tr??? this
  // static getDerivedStateFromProps(newProps, currentState) {
  //   // newProps l?? props m???i, props c?? l?? this.props (kh??ng truy xu???t ???????c)
  //   // currentState l?? ???ng v???i state hi???n t???i this.state

  //   // ho???c tr??? v??? state m???i (this.state)
  //   let newState = {...currentState, taskName: newProps.taskEdit.taskName};
  //   return newState;

  //   // tr??? v??? null state gi??? nguy??n
  //   // return null;
  // }

  render() {
    return (
      <ThemeProvider theme={this.props.themeToDoList}>
        <Container className="w-50">
          <Dropdown
            onChange={(e) => {
              let { value } = e.target;
              this.props.dispatch(changeThemeAction(value));
            }}
          >
            {this.renderTheme()}
          </Dropdown>

          <Heading2 className="text-left">TO DO LIST</Heading2>
          <TextField
            name="taskName"
            onChange={(e) => {
              this.setState({
                taskName: e.target.value,
              });
            }}
            value={this.state.taskName}
            label="Taskname"
            className="w-50"
          ></TextField>
          <Button
            onClick={() => {
              // l???y th??ng tin ng?????i d??ng nh???p v??o ?? input
              let { taskName } = this.state;
              // t???o ra 1 task object
              let newTask = {
                id: Date.now(),
                taskName: taskName,
                done: false,
              };
              this.setState(
                {
                  taskName: "",
                },
                () => {
                  // ????a task l??n object th??ng qua ph????ng th???c dispatch
                  this.props.dispatch(addTaskAction(newTask));
                }
              );
            }}
            className="ml-2"
          >
            <i className="fa fa-plus"></i> Add task
          </Button>
          {this.state.disabled ? (
            <Button
              className="ml-2"
              onClick={() => {
                this.props.dispatch(updateTaskAction(this.state.taskName));
              }}
              disabled
            >
              <i className="fa fa-upload"></i> Update task
            </Button>
          ) : (
            <Button
              className="ml-2"
              onClick={() => {
                let { taskName } = this.state;
                this.setState(
                  {
                    disabled: true,
                    taskName: "",
                  },
                  () => {
                    this.props.dispatch(updateTaskAction(taskName));
                  }
                );
              }}
            >
              <i className="fa fa-upload"></i> Update task
            </Button>
          )}
          <hr className="bg-light" />
          <Heading3>Task to do</Heading3>
          <Table>
            <Thead>{this.renderTaskToDo()}</Thead>
          </Table>
          <Heading3>Task completed</Heading3>
          <Table>
            <Thead>{this.renderTaskCompeletd()}</Thead>
          </Table>
        </Container>
      </ThemeProvider>
    );
  }

  // ????y l?? lifecycle tr??? v??? props c?? v?? state c?? c???a component tr?????c khi render(lifecycle n??y ch???y sau render)
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.taskEdit.id !== this.props.taskEdit.id) {
      this.setState({
        taskName: this.props.taskEdit.taskName,
      });
    }
  }
}
export default connect((state) => ({ ...state.ToDoListReducer }))(ToDoList);
