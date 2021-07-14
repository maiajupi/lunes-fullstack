import Form from './Form';
import TaskList from './TaskList';
import { useState, useEffect } from 'react';

const App = () => {
  //hooks
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const data =[
      {
        _id: 1,
        text: ' lavar la ropa',
        done: false
      },
      {
        _id: 2,
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
  //helpers
  const addTask = task => {
    setTasks([...tasks, task]);
  };
  // render
  return (
    <div className="container">
        <h1>Lista de Tareas</h1>
        <Form />
        <TaskList />
    </div>
  );
}

export default App;
