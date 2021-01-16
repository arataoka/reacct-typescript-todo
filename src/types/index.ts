export interface Task {
  id: number;
  title: string;
  isDone: boolean;
}

export interface TaskAction {
  type:
    | 'ADD_ITEM' //変数が使用できない
    | 'CHANGE_IS_DONE'
    | 'DELETE_ITEM'
    | 'DELETE_ALL'
    | 'TO_ALL_DONE'
    | 'TO_ALL_YET'
    | 'FETCH_TASKS';
  id: number;
  title: string;
  isDone: boolean;
  tasks: Task[];
}

export interface FilterAction {
  type: string;
  value: string;
}
