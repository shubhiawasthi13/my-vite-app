import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from './todoSlice'

function Todos() {
 const todos =  useSelector(state => state.todos)
 const dispatch = useDispatch()
  return (
    <>
  <center>
  <div>
      {todos.map((todo) => (
        <div>
        <li
        key={todo.id}>
          {todo.text}
            
          <button onClick={(e) => dispatch(removeTodo(todo.id))}>Delete</button>
        </li>
        
         </div>
     
      )) }
   </div>
  </center>
    </>
  )
}

export default Todos
