import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../contexts/AppContext';
import TaskItem from '../taskItem/taskItem';
import { Task } from '../../types';
import Style from './taskList.module.scss';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import fadeTransition from '../transition/fade.module.scss';

// tasksは分割代入で取得する
const TaskList: React.FC = () => {
  const {
    state: { filter, tasks },
    dispatch,
  } = useContext(AppContext);
  const [isTask, setIsTask] = useState(true);
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
  useEffect(() => {
    setIsTask(displayTasks.length !== 0);
  }, [displayTasks]);
  //strict modeでエラーが生じる。原因不明
  return (
    <TransitionGroup in="true" component="ul" className={Style.list}>
      {isTask ? (
        displayTasks.map((task: Task) => (
          <CSSTransition
            appear={true}
            classNames={fadeTransition}
            timeout={300}
            key={String(task.id)}
            in={isTask}
          >
            <TaskItem task={task} />
          </CSSTransition>
        ))
      ) : (
        <CSSTransition classNames={fadeTransition} timeout={100}>
          <li className={Style.noTask}>条件に一致するタスクがありません</li>
        </CSSTransition>
      )}
    </TransitionGroup>
  );
};

export default TaskList;
