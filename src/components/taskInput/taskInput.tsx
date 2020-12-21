import React, { useContext, useState } from 'react';
import AppContext from '../../contexts/AppContext';
import { ADD_ITEM } from '../../actions';
import Style from './taskInput.module.scss';

const TaskInput = () => {
  const { state, dispatch } = useContext(AppContext);
  const [text, setText] = useState('');
  const ids = state.tasks.map((task: { id: number }) => task.id);
  const maxId = ids.length ? Math.max(...ids) + 1 : 1;
  const addItem = () => {
    if (!text) return;
    dispatch({
      type: ADD_ITEM,
      title: text,
      id: maxId,
    });
    setText('');
  };
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
      />
      <button onClick={addItem}>ボタン</button>
    </>
  );
};

export default TaskInput;
