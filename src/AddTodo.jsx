import React, { useCallback, useState } from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from './todoSlice'

function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
       dispatch(addTodo(input))
       setInput ('')
    }
  return (
    <>
     <h3 className='text-center'>TODO using redux toolkit</h3>
     <center>
     <form onSubmit={addTodoHandler}>
            <input type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
             />
             <button type='submit'
                className= 'text-light bg-warning p-3'
                >Add Todo
             </button>
        </form>
     </center>
      
    
    </>
    
  )
}

export default AddTodo
