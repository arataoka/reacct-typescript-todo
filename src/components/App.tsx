import React, { useReducer } from 'react';
import '../styles/base.scss';
import Layout from './Layout/Layout';
import TaskList from './TaskList/TaskList';
import TaskInput from './TaskInput/TaskInput';
import Controller from './Controller/Controller';
import Filter from './Filter/Filter';
import reducer from '../reducers';
import AppContext from '../contexts/AppContext';
import { GlobalState } from '../types';

const initialState: GlobalState = {
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
  filter: 'ALL',
};

const App: React.FC = () => {
  const [state, dispatch] = useReducer<any>(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Layout>
        <Filter />
        <TaskList />
        <Controller />
        <TaskInput />
      </Layout>
    </AppContext.Provider>
  );
};

export default App;
