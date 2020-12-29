import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../contexts/AppContext';
import TaskItem from '../taskItem/taskItem';
import { Task } from '../../types';
import Style from './taskList.module.scss';

// tasksは分割代入で取得する
const TaskList: React.FC = () => {
  const {
    state: { filter, tasks },
    dispatch,
  } = useContext(AppContext);
  const [displayTasks, setDisplayTasks] = useState([tasks]);
  useEffect(() => {
    const taskList = tasks.filter((task: { isDone: boolean }) => {
      if (filter === 'ALL') return true;
      return task.isDone === (filter === 'DONE');
    });
    setDisplayTasks(taskList);
  }, [filter, tasks]);
  useEffect(() => {
    const json = localStorage.getItem('todo');
    const items = json ? JSON.parse(json) : [];
    dispatch({
      type: 'FETCH_TASKS',
      tasks: items,
    });
  }, [dispatch]);
  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(tasks));
  }, [tasks]);
  const isTask = displayTasks.length;
  return (
    <ul className={Style.list}>
      {isTask ? (
        displayTasks.map((task: Task) => (
          <TaskItem task={task} key={String(task.id)} />
        ))
      ) : (
        <li className={Style.noTask}>条件に一致するタスクがありません</li>
      )}
    </ul>
  );
};

export default TaskList;
