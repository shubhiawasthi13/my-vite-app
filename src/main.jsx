//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
//import Bgchange from './Bgchange'
//import Passgenrator from './Passgenrator'
// import ToDoList from './ToDoList'
// import AddTodo from './AddTodo'
// import Todos from './Todos'
// import { Provider } from 'react-redux'
// import {store} from './store'
//import Tajmahal from './tajmahal.jpg';
//import Victoria from './victoria.jpg';
import Todos from './Bgchange'
import { useState} from 'react'

const Mem = () =>{
    const [count, SetCount] = useState(0)
    const [countt, SetCountt] = useState(100)
    const [todos] = useState(["todo-1", "todo-2"])
    const increment = () => {
        SetCount((c) => c+1 )
    }
    const decrement = () => {
        SetCountt((c) => c-1 )
        
    }


    return(
        <>
           <Todos todos ={todos}/>
           <hr/>
           <div className='bg-dark p-5 fs-2 text-light'>
            count : {count}
            <button onClick={increment}>+</button>
            count: {countt}
            <button onClick={decrement}>-</button>
           </div>
        </>
    )
}

createRoot(document.getElementById('root')).render(
<>
    {/* <App title="Tajmahal" btnLink="Link-1" Image = {Tajmahal} /><br/>
    <App title="Victoria" btnLink="Link-2" Image={Victoria}/> */}

    {/* <Bgchange /> */}

       <Mem/>
    {/* <Passgenrator/> */}

    {/* <ToDoList/> */}
    
   {/* <Provider store={store}>
      <AddTodo/>
     <Todos/>
    </Provider> */}
    </>

) 
