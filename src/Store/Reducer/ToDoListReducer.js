import { ToDoListDarkTheme } from "../../JSS_StyledComponent/Themes/ToDoListDarkTheme";
import {
  ADD_TASK,
  CHANGE_THEME,
  DELETE_TASK,
  DONE_TASK,
  EDIT_TASK,
  UPDATE_TASK,
} from "../Types/ToDoListType";
import { arrayTheme } from "../../JSS_StyledComponent/Themes/ThemeManager";

const DEFAULT_STATE = {
  themeToDoList: ToDoListDarkTheme,
  taskList: [
    { id: "task-1", taskName: "task-1", done: true },
    { id: "task-2", taskName: "task-2", done: false },
    { id: "task-3", taskName: "task-3", done: true },
    { id: "task-4", taskName: "task-4", done: false },
  ],
  taskEdit: { id: "-1", taskName: "", done: false },
};

export const ToDoListReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case ADD_TASK: {
      // kiểm tra rỗng
      if (payload.taskName.trim() === "") {
        alert("TAsk name is required");
        return { ...state };
      }
      // kiểm tra tồn tại
      let taskListUpdate = [...state.taskList];
      let index = taskListUpdate.findIndex(
        (task) => task.taskName === payload.taskName
      );
      // nếu đã tồn tại
      if (index !== -1) {
        alert("Task name already exists !!!");
        return { ...state };
      }
      // nếu chưa tồn tại
      taskListUpdate.push(payload);
      // cập nhật lại
      state.taskList = taskListUpdate;
      return { ...state };
    }

    case CHANGE_THEME: {
      // tìm object theme dựa vào themeId
      let theme = arrayTheme.find((theme) => theme.id == payload);
      if (theme) {
        state.themeToDoList = { ...theme.theme };
      }
      return { ...state };
    }

    case DELETE_TASK: {
      let taskListUpdate = [...state.taskList];
      // cách 1:tìm vị trí index trong mảng có id bằng taskId
      //   let index = taskListUpdate.findIndex((task) => task.id == payload);
      //   if(index !== -1) {
      //   taskListUpdate.splice(index, 1)};

      // Cách 2: duyệt lại mảng mới không có chứa với taskId
      taskListUpdate = taskListUpdate.filter((task) => task.id !== payload);
      // cập nhật lại
      return { ...state, taskList: taskListUpdate };
      // Cách 3:
      // return {...state, taskList: state.taskList.filter(task => task.id !== payload)}
    }

    case DONE_TASK: {
      // click vào button => dispatch lên action có taskId
      let taskListUpdate = [...state.taskList];
      // tìm vị trí nào trong mảng có id bằng taskId thì ta set lại thuộc tính done thành true
      let index = taskListUpdate.findIndex((task) => task.id === payload);
      if (index !== -1) {
        taskListUpdate[index].done = true;
      }
      // cập nhật lại
      return { ...state, taskList: taskListUpdate };
    }

    case EDIT_TASK: {
      return { ...state, taskEdit: payload };
    }

    case UPDATE_TASK: {
      // cập nhật lại taskName của taskEdit
      state.taskEdit = { ...state.taskEdit, taskName: payload };

      // tìm trong taskList, cập nhật lại taskEdit mà người dùng update
      let taskListUpdate = [...state.taskList];
      let index = taskListUpdate.findIndex(
        (task) => task.id === state.taskEdit.id
      );
      if (index !== -1) {
        taskListUpdate[index] = state.taskEdit;
      }
      // cập nhật mới
      state.taskList = taskListUpdate;
      // set lại khi muốn update nữa
      state.taskEdit = { id: "-1", taskName: "", done: false };

      return { ...state };
    }
    default:
      return { ...state };
  }
};
