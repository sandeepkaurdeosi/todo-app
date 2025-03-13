import React from 'react';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaCheck, FaTrash } from 'react-icons/fa';

const Todolist = ({ tasks, onEdit, onComplete, onDelete }) => {
    const navigate = useNavigate();

    return (
        <div className='bg-gradient-to-r from-pink-300 to-blue-300 dark:bg-gradient-to-r dark:from-darkGradientStart dark:-darkGradientMiddle dark:to-darkGradientEnd flex min-h-screen'>
            <Sidebar />
            <div className="p-8 w-full">
                <h1 className="text-4xl font-bold text-center mb-6">Task List</h1>
                {tasks.length === 0 ? (
                    <p className="text-center text-gray-600 text-xl">No tasks available.</p>
                ) : (
                    <div className="grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4">
                        {tasks.map((task, index) => (
                            <div 
                                key={index}  
                                className={`shadow-lg rounded-xl p-6 border transition-all ${
                                    task.isCompleted ? 'bg-green-200 border-green-400' : 'bg-white border-gray-300'
                                } ${task.description.length > 40 ? 'col-span-3' : 'col-span-1'}`}
                            >
                                <h2 
                                    style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }} 
                                    className="text-xl font-semibold text-gray-800 mb-2"
                                >
                                    {task.taskName}
                                </h2>
                                <p className="text-gray-700">{task.description}</p>
                                <div className="flex justify-between mt-4">
                                   
                                    {!task.isCompleted && (
                                        <button 
                                            className="bg-blue-500 text-white p-2 rounded-md shadow-md hover:bg-blue-600 transition-all flex items-center gap-1"
                                            onClick={() => onEdit(index)}
                                        >
                                            <FaEdit /> Edit
                                        </button>
                                    )}
                                    
                                    <button 
                                        className={`p-2 rounded-md shadow-md transition-all flex items-center gap-1 ${
                                            task.isCompleted ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600 text-white'
                                        }`}
                                        onClick={() => !task.isCompleted && onComplete(index)}
                                        disabled={task.isCompleted}
                                    >
                                        <FaCheck /> {task.isCompleted ? 'Completed' : 'Complete'}
                                    </button>
                                   
                                    <button 
                                        className="bg-red-500 text-white p-2 rounded-md shadow-md hover:bg-red-600 transition-all flex items-center gap-1"
                                        onClick={() => onDelete(index)}
                                    >
                                        <FaTrash /> Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                <div className="flex justify-center mt-6">
                    <button 
                        onClick={() => navigate('/CreateTodo')} 
                        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Todolist;


