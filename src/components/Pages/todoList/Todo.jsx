import React, { useState } from 'react';
import TodoForm from './TodoForm';

// css
import '../../../assets/css/Todo.css'

// image
import activeTick from '../../../assets/images/active-tick.svg'
import editIcon from '../../../assets/images/edit.svg'
import closeIcon from '../../../assets/images/delete.svg'
import completeTick from '../../../assets/images/complete-tick.svg'

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {

    return todos.map((todo) => (
        <div className="todo-item-container" key={todo.id}>
            {todo.isComplete ?
                (
                    <>
                        <span className="todo-item-toggle">
                            <img src={completeTick} alt="tick" onClick={() => completeTodo(todo.id)} />
                        </span>
                        <div className='todo-item-content completed'>
                            {todo.text}
                        </div>
                    </>
                ) : (
                    <>
                        <span className="todo-item-toggle">
                            <img src={activeTick} alt="tick" onClick={() => completeTodo(todo.id)} />
                        </span>
                        <div className='todo-item-content'>
                            {todo.text}
                        </div>
                    </>
                )}
            <div className="todo-item-options">
                <span className="icon-btn" onClick={() => updateTodo(todo)}>
                    <img src={editIcon} alt="edit" />
                </span>
                <span className="icon-btn" onClick={() => removeTodo(todo)}>
                    <img src={closeIcon} alt="close" />
                </span>
            </div>
        </div>
    ));
};

export default Todo;