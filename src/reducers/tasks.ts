import {
  ADD_ITEM,
  CHANGE_IS_DONE,
  DELETE_ITEM,
  DELETE_ALL,
  ALL_DONE,
  ALL_YET,
  FILTER_TASK,
} from '../actions';

// ここはtasksのみの状態を管理しているところになる。
const tasks = (state = [], action: any) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, { id: action.id, title: action.title, isDone: false }];
    case CHANGE_IS_DONE:
      return state.map((task: { id: number; isDone: boolean }) =>
        task.id === action.id ? { ...task, isDone: !task.isDone } : task
      );
    case DELETE_ITEM:
      return state.filter(({ id }) => id !== action.id);
    case DELETE_ALL:
      return [];
    case ALL_DONE:
      return state.map((task: { id: number; isDone: boolean }) => {
        return { ...task, isDone: true };
      });
    case ALL_YET:
      return state.map((task: { id: number; isDone: boolean }) => {
        return { ...task, isDone: false };
      });
    case FILTER_TASK:
      return state.map((task: { id: number; isDone: boolean }) => {
        return { ...task, isDone: false };
      });
    default:
      return state;
  }
};

export default tasks;
