export interface Task {
  id: number;
  title: string;
  isDone: boolean;
}

export interface TaskAction {
  type:
    | 'ADD_ITEM'
    | 'CHANGE_IS_DONE'
    | 'DELETE_ITEM'
    | 'DELETE_ALL'
    | 'ALL_DONE'
    | 'ALL_YET'
    | 'FILTER_TASK'
    | 'FETCH_TASKS';
  id: number;
  title: string;
  isDone: boolean;
  tasks: Task[];
}

export interface FilterAction {
  type: 'SET_FILTER';
  value: string;
}

export interface GlobalState {
  tasks: Task[];
  filter: string;
}
