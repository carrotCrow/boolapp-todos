import React from 'react'

const TodoCard = (props)=>{
    return (
        <div className="flex flex-inline border rounded p-2 my-2">
            <input 
            className="my-auto" 
            type="checkbox" 
            checked={props.check}
            onChange={()=>{props.changeHandle(props.id)}}></input>
            <span className="mx-2">{props.text}</span>
        </div>
    )
}

export default TodoCard