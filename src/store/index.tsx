import React, { createContext, ReducerState, useReducer } from 'react';
import reducer from '../reducers/index';

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
  filter: 'ALL',
};

export const Store = createContext({
  globalState: initialState,
  setGlobalState: (state: any) => state,
});

const StoreProvider: React.FC = ({ children }) => {
  // @ts-ignore useReducerの型が不明
  const [globalState, setGlobalState] = useReducer<ReducerState<any>>(
    reducer,
    initialState
  );
  return (
    <div>
      <Store.Provider value={{ globalState, setGlobalState }}>
        {children}
      </Store.Provider>
    </div>
  );
};

export default StoreProvider;
