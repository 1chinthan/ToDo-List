import React from 'react';
import { FiCheck } from 'react-icons/fi';
import { FaTrash } from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai'

const TodoItems = ({ text, id, isComplete, deleteTodo,toggle }) => {
  return (
    <div className='flex items-center my-3 gap-2'>
      <div className='flex flex-1 items-center cursor-pointer' onClick={()=>{toggle(id)}}>
        {
        isComplete?(
            <>
            <FiCheck className='bg-green-300 rounded-full' />
            <p className='text-slate-400 line-through ml-4 text-[17px]'>
            {text}
            </p></>
            
        ):(
            <>
            <AiOutlineClose className='bg-red-300 rounded-full'/>
            <p className='text-slate-700 ml-4 text-[17px]'>
                {text}
            </p>
            </>

        )   
        
        }
      </div>
      <FaTrash
        className='text-red-600 cursor-pointer'
        onClick={() => deleteTodo(id)}  // Correctly pass the function
      />
    </div>
  );
};

export default TodoItems;
