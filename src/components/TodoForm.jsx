import React, { useState } from 'react';

function TodoForm() {
  const [input, setInput] = useState('')
  return (
    <form className="todoForm">
      <input 
        type="text" 
        placeholder="Add a TODO" 
        value={input} name="text" 
        className="todoInput"
      />
      <button className="todoButton">Add TODO</button>
    </form>
  )
}

export default TodoForm
