import { ADD_TASK, CHANGE_THEME, DELETE_TASK, DONE_TASK, EDIT_TASK, UPDATE_TASK } from "../Types/ToDoListType";

export const addTaskAction = (newTask) => ({
  type: ADD_TASK,
  payload: newTask
})
export const changeThemeAction = (themeId) => ({
  type: CHANGE_THEME,
  payload: themeId
})
export const deleteTaskAction = (id) => ({
  type: DELETE_TASK,
  payload: id
})
export const doneTaskAction = (taskId) => ({
  type: DONE_TASK,
  payload: taskId
})
export const editTaskAction = (task) => ({
  type: EDIT_TASK,
  payload: task
})
export const updateTaskAction = (taskName) => ({
  type: UPDATE_TASK,
  payload: taskName
})