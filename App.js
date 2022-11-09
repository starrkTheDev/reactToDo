import React, { useState } from 'react';
import AddTask from './Tasks/AddTask';
import TaskList from './Tasks/TaskList';


function App() {

  const [taskList, setTaskList] = useState([]);

  const addTaskHandler = (passedTask, passedDeadline) => {
    setTaskList((prevTask) => {
      return [...prevTask, {
        task: passedTask,
        deadline: passedDeadline,
        id: Math.random().toString()
      }];
    });
  }

  return (
    <div>
      <AddTask onAddTask={addTaskHandler}></AddTask>
      <TaskList lists={taskList} > </TaskList>
    </div>
  );
}

export default App;
