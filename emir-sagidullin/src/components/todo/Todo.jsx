import React, {useState} from 'react'
import uuid from 'react-uuid'

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState();
  function addTask() {
    let newTask = {
      id: uuid(),
      text: task,
    };
    setTasks([...tasks, newTask]);
  };

  function delTask(id) {
    setTasks(tasks.filter(task => task.id !== id))
  }

  function doneTask(event, id){
    if(event.target){

    }
  }

  const result = tasks.map(task => {
    return <p key={task.id} className='taskBlock'>
      <div className="task__text">
        <input type="checkbox" className='checkbox' />
        <span contentEditable='true' className='task'>{task.text}</span>
      </div>
      <button onClick={() => delTask(task.id)} className='deleteButton'>delete</button>
    </p>
  })


  return (
    <div className='content'>
      <h1>todos</h1>
      <div className="createBlock">
        <input type="text" onChange={event => setTask(event.target.value)} placeholder='Add Todo...'/>
        <button onClick={addTask} className='addTask'>Submit</button>
      </div>
        {result}
    </div>
  )
}

export default Todo
