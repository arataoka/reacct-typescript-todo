import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import TaskItem from './taskItem';
import { Task } from '../types';

// tasksは分割代入で取得する
const TaskList: React.FC = () => {
  const { state } = useContext(AppContext);
  return (
    <div>
      {state.tasks.map((task: Task) => (
        <TaskItem task={task} key={task.id} />
      ))}
    </div>
  );
};

export default TaskList;
