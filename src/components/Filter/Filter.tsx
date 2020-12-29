import React, { useContext } from 'react';
import AppContext from '../../contexts/AppContext';
import { SET_FILTER } from '../../actions';

const Filter = () => {
  const {
    state: { filter },
    dispatch,
  } = useContext(AppContext);
  const setFilter = (value: string) => {
    dispatch({
      type: SET_FILTER,
      value,
    });
  };
  return (
    <select onChange={(e) => setFilter(e.target.value)} value={filter}>
      <option value="ALL">全て</option>
      <option value="DONE">完了のみ</option>
      <option value="YET">未完了のみ</option>
    </select>
  );
};

export default Filter;
