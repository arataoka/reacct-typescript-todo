import React, { useContext, useState } from 'react';
import { Store } from '../../store';
import { ADD_ITEM } from '../../actions';
import Style from './TaskInput.module.scss';

const TaskInput: React.FC = () => {
  const {
    globalState: { tasks },
    setGlobalState,
  } = useContext(Store);
  const [text, setText] = useState<string>('');
  const ids = tasks.map((task: { id: number }) => task.id);
  const maxId = ids.length ? Math.max(...ids) + 1 : 1;
  const addItem = () => {
    if (!text) return;
    setGlobalState({
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
      <button className={Style.button} onClick={addItem}>
        ボタン
      </button>
    </>
  );
};

export default TaskInput;
