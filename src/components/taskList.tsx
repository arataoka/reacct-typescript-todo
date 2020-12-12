import React from 'react';
import { Task } from '../types';
import TaskItem from './taskItem';

type Props = {
  tasks: Task[];
};

// tasksは分割代入で取得する
const TaskList: React.FC<Props> = ({ tasks }) => {
  console.log(tasks);
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem task={task} key={task.id} />
      ))}
    </div>
  );
};

export default TaskList;
