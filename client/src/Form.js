import { useState } from 'react';

const Form = props => {
  //props
  const { addTask } = props;
  //hooks
  const [text, setText] = useState('');
//handlers
const handleChange = e => {
  setText(e.target.value);
};
const handleSubmit = e => {
  e.preventDefault();
  let newTask = {
    _id: Math.round(Math.random()*100),
    text: text,
    done: false
  };
  console.log(newTask);
  addTask(newTask);
  setText('');
};

  //render
  return(
    <form onSubmit={handleSubmit}>
      <input
      onChange={handleChange}
      type="text"
      value={text}
      />
      <input type="submit" value="Guardar"/>
    </form>
  );
};

export default Form;
