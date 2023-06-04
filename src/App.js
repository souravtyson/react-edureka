import React, { useState, useMemo } from 'react';
import './style.css';

export default function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const addTask = (event) => {
    event.preventDefault();
    setTaskList([...taskList, task]);
    setTask('');
  };

  return (
    <div>
      <form onSubmit={addTask}>
        <label>Add Task</label>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {taskList.map((tas, index) => {
        return (
          <div key={`${tas}-${index}`}>
            <input
              type="checkbox"
              value={tas}
              name={tas}
              id={`${tas}-${index}`}
            />
            <label htmlFor={`${tas}-${index}`}>{tas}</label>
          </div>
        );
      })}
    </div>
  );
}
