import React, { useContext } from 'react';
import { Store } from '../../store';
import { SET_FILTER } from '../../actions';
import { ALL, DONE, YET } from '../../constants';

const Filter: React.FC = () => {
  const {
    globalState: { filter },
    setGlobalState,
  } = useContext(Store);
  const setFilter = (value: string) => {
    setGlobalState({
      type: SET_FILTER,
      value,
    });
  };
  return (
    <select onChange={(e) => setFilter(e.target.value)} value={filter}>
      <option value={ALL}>全て</option>
      <option value={DONE}>完了のみ</option>
      <option value={YET}>未完了のみ</option>
    </select>
  );
};

export default Filter;
