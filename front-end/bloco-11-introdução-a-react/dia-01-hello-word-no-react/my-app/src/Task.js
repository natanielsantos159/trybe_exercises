
const taks = ['comer bolo', 'dormir', 'aprender react'];

const Task = (value) => {
  return (
    <ul>{taks.map((task) => <li>{task}</li>)}</ul>
  );
}

export default Task;