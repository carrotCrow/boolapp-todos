import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

import Navbar from './components/Navbar'
import TodoApp from './components/TodoApp'

class App extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div className="grid grid-cols-3 font-mono">
                <Navbar />
                <TodoApp />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))