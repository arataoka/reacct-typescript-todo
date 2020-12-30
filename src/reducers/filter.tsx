import { SET_FILTER } from '../actions';
import { FilterAction } from '../types';

const filter = (state = '', action: FilterAction) => {
  switch (action.type) {
    case SET_FILTER:
      return action.value;
    default:
      return state;
  }
};

export default filter;
