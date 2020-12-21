import React, { useReducer } from 'react';
import './styles/base.scss';
import Layout from './components/Layout/Layout';
import TaskList from './components/taskList/taskList';
import TaskInput from './components/taskInput/taskInput';
import Controller from './components/Controller/Controller';
import Filter from './components/Filter/Filter';
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
  filter: '',
};

const App: React.FC = () => {
  // @ts-ignore
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Layout>
        {/*<Filter />*/}
        <TaskList />
        <Controller />
        <TaskInput />
      </Layout>
    </AppContext.Provider>
  );
};

export default App;
