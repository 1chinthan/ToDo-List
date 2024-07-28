import React, { useEffect, useRef, useState } from 'react';
import todoicon from '../assets/checklist.png';
import { Button, TextInput } from 'flowbite-react';
import TodoItems from './TodoItems';

const Todo = () => {
  const inputRef = useRef();
  const [todoList, setTodoList] = useState(localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[]);

  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") {
      return null;
    }
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodoList((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== id);
    });
  };

  const toggle=(id)=>{
    setTodoList((prev)=>{
        return prev.map((todo)=>{
            if(todo.id===id)
            {
                return {...todo,isComplete:!todo.isComplete}
            }
            return todo;
        })
    })
  }

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todoList))
  },[todoList])


  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[500px] rounded'>
      <div className='flex items-center mt-7 gap-2'>
        <img src={todoicon} alt="" className='w-8' />
        <h1 className='text-3xl font-semibold'>To-Do List</h1>
      </div>
      <div className='flex items-center my-7 rounded-full gap-2'>
        <TextInput className='w-[90%]' placeholder='Add Task' ref={inputRef} />
        <Button className='bg-gradient-to-r from-orange-500 via-red-500 to-yellow-200 cursor-pointer' outline onClick={add}>Add</Button>
      </div>
      <div>
        {todoList.map((item) => {
          return (
            <TodoItems
              key={item.id}  // Use item.id as the key
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteTodo={deleteTodo}
              toggle={toggle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
