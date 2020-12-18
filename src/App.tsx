import React, { useReducer } from 'react';
import TaskList from './components/taskList';
import TaskInput from './components/taskInput';
import { Task } from './types';
import reducer from './reducers';
import AppContext from './contexts/AppContext';

const initialState = {
  tasks: [
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
  ],
};

const App: React.FC = () => {
  // @ts-ignore
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <TaskList />
      <TaskInput />
    </AppContext.Provider>
  );
};

export default App;
