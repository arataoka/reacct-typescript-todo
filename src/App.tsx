import React, { useState } from 'react';
import TaskList from './components/taskList';
import { Task } from './types';

const initialState: Task[] = [
  {
    id: 1,
    title: 'Hello',
    isDone: false,
  },
  {
    id: 2,
    title: 'Hello2',
    isDone: false,
  },
];

const App: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [tasks, setTasks] = useState(initialState);
  return (
    <div>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
