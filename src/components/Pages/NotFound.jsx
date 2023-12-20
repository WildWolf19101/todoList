import React from 'react'
import { Link } from 'react-router-dom'

// css
import '../../assets/css/TodoList.css'

const NotFound = () => {
    return (
        <div className="todo-container-wrapper">
            <div className="todo-container">
                <h2>404 - NotFound</h2>
                <p>Go to the <Link to="/">HomePage</Link>.</p>
            </div>
        </div>
    )
}

export default NotFound