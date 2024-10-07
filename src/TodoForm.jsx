import React, { useState } from 'react'
import { useTodo } from './Todocontext'

function TodoForm() {
    const[todo, setTodo] = useState("")
    const {addTodo} = useTodo() 

    const add = (e) =>{
        e.preventDefault()

        if(!todo) return 

       addTodo({todo, completed: false})
       setTodo("")
    }

  return (
      
      <form onSubmit={add}>
        <input 
        type="text"
        className='p-2 m-1'
        style={{width:400}} 
        value={todo}
        onChange={(e)=> setTodo(e.target.value)}
        />
        <button type="submit"
         className='btn btn-success m-1 p-3'
         >
          Add
        </button>
      </form>

  )
}

export default TodoForm
