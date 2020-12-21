import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../../contexts/AppContext';

const Controller = () => {
  const {
    state: { tasks },
    dispatch,
  } = useContext(AppContext);
  const term = (isDone: boolean) => {
    if (tasks.every((task: { isDone: boolean }) => task.isDone === isDone)) {
      setOrder(!isDone); //全て完了なら未完了に 全て未完了なら完了に
    }
  };
  useEffect(() => {
    term(true);
    term(false);
  }, [tasks]);
  const [order, setOrder] = useState(true);
  const buttonName = order ? '全て完了にする' : '全て未完了にする';
  const deleteAll = () => {
    dispatch({
      type: 'DELETE_ALL',
    });
  };
  const toggleIsDone = () => {
    const type = order ? 'ALL_DONE' : 'ALL_YET';
    dispatch({
      type,
      order,
    });
  };
  return (
    <div>
      <button onClick={toggleIsDone}>{buttonName}</button>
      <button onClick={deleteAll}>全て削除する</button>
    </div>
  );
};

export default Controller;
