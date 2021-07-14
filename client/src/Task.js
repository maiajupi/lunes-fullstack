const Task = props => {
  // prop
  const { text, done } = props.task; // destructuring
  // render
const style = {
  textdecoration: done ? 'line-through': 'none'
}

  return (
    <li style={style}>{text}
    <input type="checkbox" />
    <button>X</button>
    </li>
  );
};

export default Task;
