import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import {ToastContainer, toast} from 'react-toastify';
import Sidebar from './Sidebar.jsx'
import 'react-toastify/dist/ReactToastify.css';



function CreateTodo() {
    let [newTask,setNewTask]=useState('');
    let [ newDesc,setNewDesc]= useState('');
    let[newEditTask, setEditTask] = useState(null);

    let navigate = useNavigate();

    

    let [showList,setShowList]=useState(JSON.parse(localStorage.getItem('task'))|| []);

    useEffect(()=>{
        localStorage.setItem('task',JSON.stringify(showList));
      },[showList])

      const taskFunc=(e)=>{
        setNewTask(e.target.value)
      }
    
      const descFunc=(e)=>{
        setNewDesc(e.target.value)
      }

     

      let addlist = (e)=>{
        e.preventDefault(); 
        if(newTask.trim() !== '' && newDesc.trim() !== ''){
          if(newEditTask !== null){
            const editList = [...showList];
            editList[newEditTask]={taskName:newTask,description:newDesc, isCompleted: showList[newEditTask].isCompleted}
            setShowList(editList);
            setEditTask(null)
          }else{
          setShowList([...showList,{taskName:newTask,description:newDesc, isCompleted:false}])
          toast.info('Task is added :)', {  
            position: "top-center",
            autoClose: 5000
        });
        }
        setNewTask('');
        setNewDesc('');
      }
      }

     

    return (
        <>
            <div className='bg-gradient-to-r from-pink-300 to-blue-300 dark:bg-gradient-to-r dark:from-darkGradientStart dark:-darkGradientMiddle dark:to-darkGradientEnd  flex'>
                <Sidebar />
                <div className='mt-20 w-full'>
                    <h1 className='text-center text-7xl tracking-wide  mb-12  font-lavishly' >Create a task</h1>
                    <h2 className='text-2xl ml-16 mb-2'>Title:</h2><input placeholder='Enter title of task' value={newTask} onChange={taskFunc} className='w-[1020px] p-2 border border-gray-400 h-14 rounded-md ml-16 mr-10' />
                    <h2 className='text-2xl ml-16 mt-10 mb-2'>Description:</h2><input value={newDesc} onChange={descFunc} placeholder='Enter Description of task' className='w-[1020px] p-2 border border-gray-400 h-14 rounded-md ml-16 mr-10' />
                    <form>
                    <div className="flex justify-end mr-16 gap-4 mt-14 ml-16">
                        <button onClick={addlist} className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all">
                            Add Task
                        </button>
                        <button onClick={()=> navigate('/CreateTodo/todolist')} className="px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition-all">
                            Go to List
                        </button>
                    </div>
                        </form>
                <ToastContainer/>
                </div>
            </div>
        </>
    )
}

export default CreateTodo