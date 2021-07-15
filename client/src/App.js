import Form from './Form';
import TaskList from './TaskList';
import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  //hooks
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    axios.get('/api/tasks')
    .then(res =>{
      setTasks(res.data);
    });

  }, []);

  //helpers
  const addTask = task => {
    axios.post('./api/tasks', task)
    .then(res =>{
      setTasks([...tasks, res.data]);
    });
  };
  const removeTask = id => {
    setTasks(tasks.filter(t => t._id !== id))
  };
  // render
  return (
    <div className="container">
        <h1>Lista de Tareas</h1>
        <Form addTask={addTask} />
        <TaskList removeTask={removeTask} tasks={tasks} />
    </div>
  );
}

export default App;
