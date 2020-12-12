import React from 'react';
import { Task } from '../types';

type Props = {
  task: Task;
};

// tasksは分割代入で取得する
// オブジェクトをそのまま表示することができない。
const TaskItem: React.FC<Props> = ({ task }) => {
  console.log(task);
  return (
    <div>
      <li className="taskList">{task.title}</li>
    </div>
  );
};

export default TaskItem;
