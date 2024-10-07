import React, { useEffect, useState } from 'react'
import { TodoProvider } from './Todocontext'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

function ToDoList() {
 const [todos, setTodos] = useState([])

 const addTodo = (todo) =>{
      setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
    }
    const updateTodo = (id,todo) =>{
        setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
    }
    const deleteTodo = (id, todo) =>{
        setTodos((prev) => prev.filter((todo) => todo.id !==id))
      }
      const toggleComplete = (id) =>{
        setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
      }

useEffect(() => {
const todos =  JSON.parse(localStorage.getItem("todos"))
if(todos && todos.length > 0){
    setTodos(todos)
}
}, [])

useEffect(()=> {
localStorage.setItem("todos", JSON.stringify(todos))
},[todos])


  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
    <div style={{height:600}} className='bg-dark p-5'>
      <div className="container w-50 bg-secondary p-5">
        <h4 className="text-light text-center ">Manage Your Todos-- using context api</h4>
      <div>
        <TodoForm/>
      </div>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
           <TodoItem todo = {todo}/> 
          </div>
        ))}
      </div>
      </div>
    </div>
    </TodoProvider>
  )
}

export default ToDoList
