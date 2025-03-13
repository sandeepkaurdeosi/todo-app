import React, { useEffect, useState } from 'react'
import First from './Components/First.jsx'
import {Route,Routes,BrowserRouter } from'react-router-dom'
import CreateTodo from './Components/CreateTodo.jsx'
import Todolist from './Components/Todolist.jsx'
import Alerts from './Components/Alerts.jsx'

function App() {
const [tasks,setTasks]= useState(JSON.parse(localStorage.getItem('task'))||[]);

useEffect(() => {
  localStorage.setItem('task', JSON.stringify(tasks));
}, [tasks])

let updateFunc = (index)=>{
  let deleteTask= tasks.filter((_,i)=> i !== index);
  setTasks(deleteTask);
}

const toggle = (index)=>{
  const list=[...tasks];
  list[index].isCompleted= !list[index].isCompleted;
  setTasks(list);
}

const editTask = (index) => {
  const updatedTaskName = prompt("Edit Task Name:", tasks[index].taskName);
  const updatedTaskDesc = prompt("Edit Description:", tasks[index].description);
  if (updatedTaskName && updatedTaskDesc) {
    const updatedTasks = [...tasks];
    updatedTasks[index] = { 
      ...updatedTasks[index], 
      taskName: updatedTaskName, 
      description: updatedTaskDesc 
    };
    setTasks(updatedTasks);
  }
};


  return (
    <>
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<First/>}></Route>
        <Route path='/CreateTodo' element={<CreateTodo  setTasks={setTasks} />}></Route>
      <Route path='/CreateTodo/todolist' element={<Todolist tasks={tasks} onEdit={editTask} onComplete={toggle} onDelete={updateFunc} />}> </Route>
      <Route path='/CreateTodo/alert' element={<Alerts/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
