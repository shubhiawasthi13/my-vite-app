import React, { useCallback, useEffect, useRef, useState } from 'react'

function Passgenrator() {
const [length, setLength] = useState(8)
const [numberAllowed, setNumberAllowed] = useState(false)
const [charAllowed, setCharAllowed] = useState(false)
const [Password, setPassword] = useState("")

//useRef hook
const passwordRef = useRef(null)
const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select()
   // passwordRef.current?.setSelectionRange(0, 3)
    window.navigator.clipboard.writeText(Password)
},
[Password])

const passwordGenrator = useCallback(() => {
    let pass =""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+= "0123456789"
    if(charAllowed) str+= "!@#$%^&*{}[]+-=_~`"
  for(let i = 1; i <= length; i++){
    const char = Math.floor(Math.random()*str.length + 1)
    pass += str.charAt(char)
  }
setPassword(pass)

},[length, numberAllowed, charAllowed, setPassword])

 useEffect(() => {
    passwordGenrator()
 },[length, numberAllowed, charAllowed,passwordGenrator])

  return (
    <div className='bg-dark'style={{display:'flex', alignItems:'center', justifyContent:'center', height:620}}>
      <div className='bg-secondary p-5 w-50'>
             <input
              type="text" 
              value={Password}
              className='p-3'
              style={{width:500}}
              placeholder='password'
              readOnly
              ref={passwordRef}
              /> 
              <button onClick={copyPasswordToClipBoard} className='btn btn-primary p-3 m-1 fw-bold'>Copy</button>
            <div className='d-flex'> 
               <input 
                type="range"
                min={6}
                max={100}
                value={length}
                onChange={(e) => {setLength(e.target.value)}}
                />
                <label className='text-warning p-2'>Length: {length}</label>

                <input type="checkbox"
                 defaultChecked={numberAllowed}
                 id="numberInput"
                 onChange={() => {
                    setNumberAllowed((Prev) => !Prev);
                }}
                />
                <label htmlFor='numberInput' className='text-warning p-2'>Numbers</label>

                <input type="checkbox"
                 defaultChecked={charAllowed}
                 id="charInput"
                 onChange={() => {
                    setCharAllowed((Prev) => !Prev);
                }}
                />
                <label htmlFor='numberInput' className='text-warning p-2'>Characters</label>

            </div>
      </div>
    </div>
  )
}

export default Passgenrator
