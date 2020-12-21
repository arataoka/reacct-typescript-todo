import React, { useContext } from 'react';
import { Task } from '../../types';
import AppContext from '../../contexts/AppContext';
import Style from './taskItem.module.scss';

type Props = {
  task: Task;
};

// tasksは分割代入で取得する
// オブジェクトをそのまま表示することができない。
const TaskItem: React.FC<Props> = ({ task }) => {
  const { dispatch } = useContext(AppContext);
  const changeIsDone = () => {
    dispatch({
      type: 'CHANGE_IS_DONE',
      id: task.id,
    });
  };
  const deleteItem = () => {
    dispatch({
      type: 'DELETE_ITEM',
      id: task.id,
    });
  };
  return (
    <li className={Style.listItem}>
      <input
        className={Style.checkbox}
        type="checkbox"
        checked={task.isDone}
        onChange={changeIsDone}
        id={String(task.id)}
      />
      <label htmlFor={String(task.id)} className={Style.label}>
        <span />
        {task.title}
      </label>
      <span className={Style.listItem__close} onClick={deleteItem}>
        ×
      </span>
    </li>
  );
};

export default TaskItem;
