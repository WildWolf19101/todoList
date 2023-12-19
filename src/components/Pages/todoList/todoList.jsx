import React, { useEffect, useState } from 'react'

import Header from '../../Layouts/Header'
import Footer from '../../Layouts/Footer'
import Form from './TodoForm'
import Todo from './Todo'
import TodoFilter from './TodoFilter'

const todoList = () => {
    const [todos, setTodos] = useState([]);
    const [filterStatus, setFilterStatus] = useState('all');



    // add
    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        // console.log(...todos);
    };

    // update
    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };

    // delete
    const removeTodo = id => {
        const removedArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removedArr);
    };

    // complete
    const completeTodo = (id) => {
        setTodos((prevTodos) => {
            const updatedTodos = prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, isComplete: !todo.isComplete };
                }
                return todo;
            });

            // Sắp xếp mảng sao cho task chưa hoàn thành lên trên
            const sortedTodos = [
                ...updatedTodos.filter((todo) => !todo.isComplete),
                ...updatedTodos.filter((todo) => todo.isComplete),
            ];

            return sortedTodos;
        });
    };

    // Filter function
    const filteredTodos = todos.filter(todo => {
        if (filterStatus === 'all') {
            return true;
        } else if (filterStatus === 'active') {
            return !todo.isComplete;
        } else {
            return todo.isComplete;
        }
    });

    // Filter status click handler
    const handleFilterClick = status => {
        setFilterStatus(status);
    };


    return (
        <div className="Root-layout">

            <Header />

            <div className="todo-container-wrapper">
                <div className="todo-container">
                    <Form onSubmit={addTodo} />

                    <TodoFilter filterStatus={filterStatus} handleFilterClick={handleFilterClick} />

                    <div className="todo-list-container">
                        <Todo
                            todos={filteredTodos}
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