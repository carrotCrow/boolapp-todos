import React, { useState, useEffect } from 'react'

const NewTodos = (props)=>{
    const [inputVar, setInputVar] = useState('')
    
    return (
        <div className="flex justify-around">

            <input 
            className="border rounded px-1" 
            type="text" 
            placeholder="new todos"
            onChange={(event)=>{setInputVar(event.target.value)}}
            value={inputVar}
            ></input>

            <button 
            className="focus:outline-none" 
            onClick={()=>{
                props.callAdd(inputVar)
                setInputVar('')
            }}>Add</button>
        </div>
    )
}

export default NewTodos