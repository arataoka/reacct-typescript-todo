import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../contexts/AppContext';
import TaskItem from '../taskItem/taskItem';
import { Task } from '../../types';
import Style from './taskList.module.scss';

// tasksは分割代入で取得する
const TaskList: React.FC = () => {
  const {
    state: { filter, tasks },
  } = useContext(AppContext);
  const [displayTasks, setDisplayTasks] = useState([tasks]);
  useEffect(() => {
    const taskList = tasks.filter((task: { isDone: boolean }) => {
      if (filter === 'ALL') return true;
      return task.isDone === (filter === 'DONE');
    });
    setDisplayTasks(taskList);
  }, [filter, tasks]);

  return (
    <ul className={Style.list}>
      {displayTasks.map((task: Task) => (
        <TaskItem task={task} key={String(task.id)} />
      ))}
    </ul>
  );
};

export default TaskList;