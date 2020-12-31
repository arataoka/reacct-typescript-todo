import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../../contexts/AppContext';
import Style from './Controller.module.scss';
import { DELETE_ALL, TO_ALL_DONE, TO_ALL_YET } from '../../actions';

const Controller = () => {
  const {
    state: { tasks },
    dispatch,
  } = useContext(AppContext);
  //全て完了なら「全て未完了にする」 全て未完了なら「全て完了にする」
  const [completeButton, setCompleteButton] = useState<boolean>(true);
  const buttonName = completeButton ? '全て完了にする' : '全て未完了にする';
  useEffect(() => {
    const term = (isDone: boolean) => {
      if (tasks.every((task: { isDone: boolean }) => task.isDone === isDone)) {
        setCompleteButton(!isDone);
      }
    };
    term(true);
    term(false);
  }, [tasks]);
  const deleteAll = () => {
    dispatch({
      type: DELETE_ALL,
    });
  };
  const toggleAll = () => {
    const type = completeButton ? TO_ALL_DONE : TO_ALL_YET;
    dispatch({
      type,
      completeButton,
    });
  };
  //下記の書き方だとunknown classNameのエラーが出る
  const buttonClass = completeButton
    ? Style['button--complete']
    : Style['button--incomplete'];
  return (
    <div className={Style.wrapper}>
      <button className={`${Style.button} ${buttonClass}`} onClick={toggleAll}>
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
