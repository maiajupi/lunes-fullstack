import Task from './Task';
import { useState, useEffect } from 'react';

const TaskList = ()=> {
  const [tasks, setTasks] = useState([]);
  useEffect(()=>{
    const data =[
      {
        _id: 1,
        text: 'lavar la ropa',
        done: false
      },
      {
        _id:2,
        text:'pasear al perro',
        done: true
      },
      {
        _id:3,
        text: 'estudiar matematicas',
        done: false
      },
    ];
    setTasks(data);
  }, []);

  return (
    <ul>
    {tasks.map(task => (
      <Task task={task} />
    ))}
    </ul>
  );

};

export default TaskList;
