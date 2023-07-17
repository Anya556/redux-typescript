import { useState } from 'react';
import { useAppDispatch } from './hooks';

import { addTodo } from './store/todoSlice';
import './App.css';
import TodoList from './components/TodoList';
import NewTodoForm from './components/NewTodoForm';

function App() {
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addTodo( text ));
      setText('');
    }
  };

  return (
    <div className="App">
      <NewTodoForm
        value={text}
        updateText={setText}
        handleAction={handleAction}
      />
      <TodoList />
    </div>
  );
}

export default App;
