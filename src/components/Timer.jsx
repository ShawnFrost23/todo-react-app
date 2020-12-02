import React, { useState } from 'react'

function Timer() {
  const [time, setTime] = useState(new Date())
  
  const updateTime = () => {
    setInterval(() =>{
      setTime(new Date())
    }, 1000)
  }
  return (
    <div className="timer">
      <h1>Current Time</h1>
      <h2>{time.toLocaleTimeString()}</h2>
      {updateTime()}
    </div>
  )
}

export default Timer
