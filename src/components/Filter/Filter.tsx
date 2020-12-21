import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../../contexts/AppContext';
import { SET_FILTER } from '../../actions';

const Filter = () => {
  const {
    state: { filter },
    dispatch,
  } = useContext(AppContext);
  const [filterType, setFilterType] = useState('ALL');
  useEffect(() => {
    dispatch({
      type: SET_FILTER,
      filterType,
    });
  }, [filter]);
  return (
    <select onChange={(e) => setFilterType(e.target.value)}>
      <option value="SET_ALL">全て</option>
      <option value="SET_DONE">完了のみ</option>
      <option value="SET_YET">未完了のみ</option>
    </select>
  );
};

export default Filter;
