import { useState } from 'react';
export default function App(){
    
  const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');
  

  function engizu(event) {
    event.preventDefault();

    if (task) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  }
function inp(event) {
    setTask(event.target.value);
  }
  function done(index) {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <div>



      <form onSubmit={engizu}>

        <input type="text" placeholder="Enter text." value={task} onChange={inp} />
        <button type="submit">enter</button>
        
      </form>



      <div className="listTask">

        <ul style={{display: 'flex', flexDirection: 'column', gap: "20px" }}>

          {tasks.map((task, index) => (
            <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}> {task.text} 
            <button onClick={() => done(index)}>finish</button></li>
          ))}

        </ul>

      </div>




    </div>
  );
}