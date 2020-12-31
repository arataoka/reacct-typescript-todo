import {
  ADD_ITEM,
  CHANGE_IS_DONE,
  DELETE_ITEM,
  DELETE_ALL,
  TO_ALL_DONE,
  TO_ALL_YET,
  FETCH_TASKS,
} from '../actions';
import { Task, TaskAction } from '../types';

// ここはtasksのみの状態を管理しているところになる。
const tasks = (state: Task[] = [], action: TaskAction) => {
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
    case TO_ALL_DONE:
      return state.map((task: { id: number; isDone: boolean }) => {
        return { ...task, isDone: true };
      });
    case TO_ALL_YET:
      return state.map((task: { id: number; isDone: boolean }) => {
        return { ...task, isDone: false };
      });
    case FETCH_TASKS:
      return action.tasks;
    default:
      return state;
  }
};

export default tasks;
