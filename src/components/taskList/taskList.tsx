import React, { useContext } from 'react';
import AppContext from '../../contexts/AppContext';
import TaskItem from '../taskItem/taskItem';
import { Task } from '../../types';
import Style from './taskList.module.scss';

// tasksは分割代入で取得する
const TaskList: React.FC = () => {
  const { state } = useContext(AppContext);
  // const taskList = state.tasks.filter((task: { isDone: boolean }) => {
  //   if (state.filter === 'SET_ALL') return task;
  //   return (task.isDone = state.filter === 'SET_DONE');
  // });
  return (
    <ul className={Style.list}>
      {state.tasks.map((task: Task) => (
        <TaskItem task={task} key={task.id} />
      ))}
    </ul>
  );
};

export default TaskList;
