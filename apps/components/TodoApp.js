import React, { useState, useCallback, useEffect } from 'react'
import tododata from './data'
import TodoCard from './TodoCard'
import NewTodos from './NewTodos'
import { render } from 'react-dom'

const TodoApp = ()=>{
    //state data = tododata [array]
    const [data, setData] = useState(tododata)

    const changedata = useCallback((id)=>{
        const updateData = data.map((obj)=>{
            if(obj.id === id){
                obj.completed = !obj.completed
            }
            return obj
        })

        setData(updateData)

    },[data])

    const addnewTask = useCallback((value)=>{
        if (value !== ''){
            setData((val)=>{
                return [...val,{
                    id: data.length+1,
                    text: value,
                    completed: false
                }]
            })
        }         
    },[data])

    let list = data.map((obj)=>{
        return <TodoCard 
        key={obj.id} 
        id={obj.id}
        text={obj.text} 
        check={obj.completed}
        changeHandle={changedata}/>
    });
  
    return(
        <div className="col-start-2 my-2 mx-auto mt-6 p-2 ">
            <div className="border rounded col-start-2 w-full p-2 my-2">
            <NewTodos callAdd={addnewTask}/>
            </div>
            <div className="border rounded col-start-2 w-64 p-2" >
                
                <h1>Todolist : </h1>
                <hr className="my-2" />

                {list}

            </div>
        </div>
    )
}

export default TodoApp