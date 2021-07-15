import Task from './Task';
import { useState, useEffect } from 'react';

const TaskList = props => {
  //props
  const { tasks, removeTask } = props;


  return (
    <ul>
    {tasks.map(task => (
      <Task task={task}
        removeTask={removeTask}
        key={task._id}
       />
    ))}
    </ul>
  );

};

export default TaskList;
