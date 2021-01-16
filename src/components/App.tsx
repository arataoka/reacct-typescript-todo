import React from 'react';
import '../styles/base.scss';
import Layout from './Layout/Layout';
import TaskList from './TaskList/TaskList';
import TaskInput from './TaskInput/TaskInput';
import Controller from './Controller/Controller';
import Filter from './Filter/Filter';

const App: React.FC = () => {
  return (
    <Layout>
      <Filter />
      <TaskList />
      <Controller />
      <TaskInput />
    </Layout>
  );
};

export default App;
