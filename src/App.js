import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import { useState } from 'react';

function App() {
    const [tasks, setTasks] = useState([]);
    const [newTask, addNewTask] = useState("");
    const addTask = () => {
        if (newTask.trim() === "") return;
        setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }])
        addNewTask("");
    }
    const removeTask = (taskID) => {
        setTasks(tasks.filter(task => task.id !== taskID))
    }
    
  return (
      <div>
            <div className="container mt-4 p-4 bg-light rounded shadow">
              <h1 className='text-center mb-4'>To Do List</h1>
              <div className='input-group mb-3 justify-content-center'>
                  <input type="text" className='from-control rounded-start w-75 p-2 border' onKeyDown={(e) => e.key === "Enter" && addTask()} value={newTask} onChange={(e) => addNewTask(e.target.value)} placeholder="Enter Task Name"></input>
                  <button className='btn btn-primary' onClick={addTask}><i class="bi bi-plus-lg"></i></button>
              </div>
              <ol className='list-group'>
                  {tasks.map((task) => (
                      <li key={task.id} className='list-group-item d-flex justify-content-between align-items-center text-capitalize'>
                          <div>
                              <input type='checkbox' className='m-2' /* Temporary solution */ ></input>
                              {task.text}
                          </div>
                          <div>
                              { /* To Do */ }
                              {/*<button className='btn btn-warning m-1 btn-sm' onClick={() => editTask(task.id)}><i class="bi bi-pencil"></i></button>*/}
                              <button className='btn btn-danger btn-sm' onClick={() => removeTask(task.id)}><i class="bi bi-trash"></i></button>
                          </div>
                      </li>
                  ))}
              </ol>
              </div>
      </div>
  );
}

export default App;