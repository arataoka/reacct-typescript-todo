import { SET_FILTER } from '../actions';

const filter = (state = [], action: any) => {
  switch (action.type) {
    case SET_FILTER:
      return action.value;
    default:
      return state;
  }
};

export default filter;
