const Task = props => {
  // prop
  const { text, done, _id } = props.task; // destructuring
  const { removeTask } = props;
  const style = {
    textdecoration: done ? 'line-through': 'none'
};
const handleClick = e => {
  removeTask(_id);
};

//render
  return (
    <li style={style}>{text}
    <input type="checkbox" />
    <button onClick={handleClick}>X</button>
    </li>
  );
};

export default Task;
