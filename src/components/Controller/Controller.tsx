import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../../contexts/AppContext';
import Style from './Controller.module.scss';

const Controller = () => {
  const {
    state: { tasks },
    dispatch,
  } = useContext(AppContext);

  useEffect(() => {
    const term = (isDone: boolean) => {
      if (tasks.every((task: { isDone: boolean }) => task.isDone === isDone)) {
        setOrder(!isDone); //全て完了なら未完了に 全て未完了なら完了に
      }
    };
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
  const buttonClass = order
    ? Style['button--complete']
    : Style['button--incomplete'];
  return (
    <div className={Style.wrapper}>
      <button
        className={`${Style.button} ${buttonClass}`}
        onClick={toggleIsDone}
      >
        {buttonName}
      </button>
      <button
        className={`${Style['button--delete']} ${Style.button}`}
        onClick={deleteAll}
      >
        全て削除する
      </button>
    </div>
  );
};

export default Controller;
