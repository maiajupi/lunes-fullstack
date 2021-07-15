const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 4000;
const DB = 'mongodb://localhost/tareas'

const app = express ();

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifedTopology: true
})
.then(() => console.log('DB conectada'));

//modelo de tarea
const TaskSchema = new mongoose.Schema({
  text: String,
  done: { type: Boolean, default: false }
});
const Task = mongoose.model('Task', TaskSchema);

app.use(express.static('public'));
//todas las Tarea
app.use(express.json());
app.get('/api/tasks', (req, res) => {
  Task.find((err, tasks) => {
    res.status(200).json(tasks);
  });
});
//agregar una tarea a la db
app.post('/api/tasks', (req, res) =>{
  const newTask = new Task({
    text: req.body.text
  });
  newTask.save((err, task) =>{
    res.status(201).json(task);
  });
});

app.listen(PORT, ()=> {
   console.log('Server escuchando en puerto &(Port)');
});
