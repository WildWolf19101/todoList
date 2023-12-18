import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'
import Form from '../Layouts/TodoForm'




const todoList = () => {
    const [todos, setTodos] = useState([]);

    // const addTodo = todo => {
    //     if (!todo.text ) return;

    //     const newTodo = ()
    // }


    return (
        <div className="Root-layout">

            <Header />

            <div className="todo-container-wrapper">
                <div className="todo-container">
                    <Form />
                    <div className="todo-filter-container">
                        <div className="todo-filter-count">3 items left</div>
                        <div className="todo-filter-status">
                            <NavLink to="/">All</NavLink>
                            <NavLink to="active">Active</NavLink>
                            <NavLink to="complete">Complete</NavLink>
                        </div>
                    </div>
                    <div className="todo-list-container">
                        <Outlet />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default todoList