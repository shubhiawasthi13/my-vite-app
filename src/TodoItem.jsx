import React, { useState } from 'react'
import {useTodo} from './Todocontext'

function TodoItem({ todo }) {
  const [istodoEditable ,setIsTodoEditable] = useState(false)
  const [todoMsg ,setTodoMsg] = useState(todo.todo)
 const {updateTodo ,deleteTodo, toggleComplete} = useTodo()

 const editTodo = () => {
  updateTodo(todo.id, {...todo, todo: todoMsg})
  setIsTodoEditable(false)
 }

 const ToggleCompleted = () => {
   toggleComplete(todo.id)
 }
  return (
    <div className={`p-3 ${
      todo.completed ? "bg-warning" : "bg-light"
    }`}>
      <input 
      type="checkbox" 
       checked={todo.completed}
       onChange={ToggleCompleted}
      />
      <input type="text"
      className= {`${istodoEditable ? "bordered" : "border-0"}`}
      value={todoMsg}
      onChange={(e) => setTodoMsg(e.target.value)}
      readOnly={!istodoEditable}
       />
       <button onClick={() => {
        if(todo.completed) return;
        if(istodoEditable){
          editTodo();
        }else setIsTodoEditable((prev) => !prev);
       }}
       >
        {istodoEditable ? "save" : "edit"}
       </button>
       <button onClick={() => deleteTodo(todo.id)}>
        Delete
       </button>
    </div>
  )
}

export default TodoItem
