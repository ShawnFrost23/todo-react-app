import React, { useState } from 'react'
import TodoForm from './TodoForm';

function TodoList() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <h1>Whats the Plan for Today?</h1>
      <TodoForm />
    </>
  )
}

export default TodoList
