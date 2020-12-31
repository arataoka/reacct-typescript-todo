import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../contexts/AppContext';
import TaskItem from '../TaskItem/TaskItem';
import { Task } from '../../types';
import Style from './TaskList.module.scss';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import fadeTransition from '../transition/fade.module.scss';
import { FETCH_TASKS } from '../../actions';
import { ALL, DONE, STORAGE_KEY } from '../../constants';

// tasksは分割代入で取得する
const TaskList: React.FC = () => {
  const {
    state: { filter, tasks },
    dispatch,
  } = useContext(AppContext);
  const [isTask, setIsTask] = useState<boolean>(true);
  const [displayTasks, setDisplayTasks] = useState<Task[]>(tasks);
  //表示するタスクを設定
  useEffect(() => {
    const taskList = tasks.filter((task: { isDone: boolean }) => {
      if (filter === ALL) return true;
      return task.isDone === (filter === DONE);
    });
    setDisplayTasks(taskList);
  }, [filter, tasks]);
  //ローカルストレージから取得
  useEffect(() => {
    const items = localStorage.getItem(STORAGE_KEY);
    if (!items) return;
    dispatch({
      type: FETCH_TASKS,
      tasks: JSON.parse(items),
    });
  }, [dispatch]);
  //ローカルストレージへ保存
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);
  //タスクの有無を設定
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
