import React, { useEffect } from 'react'
import Banner from '../../public/Banner.jpg'
import { LuListTodo } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
import {ToastContainer, toast} from 'react-toastify';
import CreateTodo from './CreateTodo.jsx'
import { useNavigate } from 'react-router-dom';
// import {arrow} from '../../public/hand-drawn-dashed-arrow-shape-free-png.webp'
// import {arrow} from '../../public/d736dd340d44dbd6b4304b9396c1a451.jpg?url'
function First() {

  useEffect(()=>{
    const timer = setTimeout(() => {
      toast.info('Happily create a Todo!!!',{
        position:"top-center",
        autoClose: 5000
      }
      )
    }, 2000);

    return ()=> clearTimeout(timer);
  },[])

  const navigate = useNavigate();

  const handleGetStarted=()=>{
    navigate("/CreateTodo")
  }
  return (
    <>
    <div className='bg-gradient-to-r from-pink-100 via-pink-200 to-pink-300'>
    <div className='pt-8 ml-32 flex'>
      <h1 className='text-4xl font-lavishly font-bold  'style={{ letterSpacing: '0.1em' }} >TodoApp</h1><LuListTodo />
      <button className='absolute right-16  bg-blue-600 text-white px-3 py-2  rounded-md ' onClick={handleGetStarted}>+ Create Todo </button>
    </div>
    <div className='flex mt-10 '>
    <div className=' mt-20 text-6xl ml-32'>
      Welcome to <br/>our <span className='text-red-400' >TodoApp!!!</span><br/>

      <button className='text-xl mt-10 bg-amber-300 rounded-md p-2 text-white' onClick={handleGetStarted}>Get Started</button>
      <img src="/d736dd340d44dbd6b4304b9396c1a451-removebg-preview.png" className='h-48 w-[400px] ml-60 relative -top-40  transform scale-y-[-1]'  alt="arrow" />
    </div>
    <div className='ml-9 mr-7'>
      <img src={Banner} className='shadow-[2px_0_5px_rgba(0,0,0,0.15)]]'></img>
    </div>
    </div>
    <footer className='text-right mt- text-black flex  items-end justify-end'>
  Built with <FaHeart className='mx-1 text-red-500' /> by Sandeep Deosi
</footer>
<ToastContainer/>
    </div>
    </>
  )
}

export default First