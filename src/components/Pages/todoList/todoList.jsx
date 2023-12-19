import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import Header from '../../Layouts/Header'
import Footer from '../../Layouts/Footer'
import Form from './TodoForm'
import Todo from './Todo'




const todoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        console.log(...todos);
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };

    const removeTodo = id => {
        const removedArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removedArr);
    };

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };


    return (
        <div className="Root-layout">

            <Header />

            <div className="todo-container-wrapper">
                <div className="todo-container">
                    <Form onSubmit={addTodo} />

                    <div className="todo-filter-container">
                        <div className="todo-filter-count">3 items left</div>
                        <div className="todo-filter-status">
                            <span className="active"> All </span>
                            <span> Active </span>
                            <span> Complete </span>
                        </div>
                    </div>

                    <div className="todo-list-container">
                        <Todo
                            todos={todos}
                            completeTodo={completeTodo}
                            removeTodo={removeTodo}
                            updateTodo={updateTodo}
                        />
                    </div>


                </div>
            </div>

            <Footer />
        </div>
    )
}

export default todoList