import { ADD_ITEM } from '../actions';

const tasks = (state = [], action: any) => {
  const { title, id } = action;
  switch (action.type) {
    case ADD_ITEM:
      return [...state, { id, title, isDone: false }];
    default:
      return state;
  }
};

export default tasks;
