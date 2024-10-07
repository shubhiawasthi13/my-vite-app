import React, { useState } from 'react'
import {memo} from 'react'

// function Bgchange() {
//     const [color, setColor] = useState("black")
//     console.log("hello");
//   return (
//     <>
//     <div style={{height: 620, backgroundColor: color}}>
//         <div style={{display:'flex', justifyContent:'space-evenly' ,alignItems:'center'}} className='bg-warning p-2'>
//            <button onClick={() => setColor("red")} className='btn btn-danger text-light border-0'>Red</button>
//            <button onClick={() => setColor("green")} className='btn btn-success text-light border-0'>Green</button>
//            <button onClick={() => setColor("blue")} className='btn btn-primary text-light border-0'>Blue</button>
//            <button onClick={() => setColor("white")} className='btn btn-light text-dark border-0'>white</button>
//            <button onClick={()=> setColor("grey")} className='btn btn-secondary text-light border-0'>Grey</button>
    
//         </div>
//     </div>

//     </>
//   )
// }
const Todos = ({todos}) => {
  console.log("child render");
return (
  <>
 <h2 className='text-dark fs-1'>My Todos</h2>
 {todos.map((todo, index) => {
 return <p key ={index}>{todo}</p>
})}
</>
);
}

// export default Bgchange
export default memo(Todos);