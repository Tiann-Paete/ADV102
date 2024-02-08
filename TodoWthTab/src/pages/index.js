import React from 'react';
import { TodoProvider } from '../components/TodoContext'; // Adjust the path accordingly
import TodoList from '../components/TodoList'; // Adjust the path accordingly

const App = () => {
  return (
    <TodoProvider>
      <TodoList />
    </TodoProvider>
  );
};

export default App;
