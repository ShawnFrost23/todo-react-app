import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState('')

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus()
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    })

    setInput('');
  }

  const handleChange = (e) => {
    setInput(e.target.value);
  }
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input 
            type="text" 
            placeholder="Update Todo" 
            value={input} name="text" 
            className="todoInput edit"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todoButton edit">Update</button>
        </>
        ) : (
          <>
            <input 
              type="text" 
              placeholder="Add a TODO" 
              value={input} name="text" 
              className="todoInput"
              onChange={handleChange}
              ref={inputRef}
            />
            <button className="todoButton">Add TODO</button>
          </>
        )
      }
    </form>
  )
}

export default TodoForm
