import React, { useState } from 'react';
import TodoForm from './TodoForm';

// image
import activeTick from '../../../assets/images/active-tick.svg'
import editIcon from '../../../assets/images/edit.svg'
import closeIcon from '../../../assets/images/delete.svg'
import completeTick from '../../../assets/images/complete-tick.svg'

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return todos.map((todo, index) => (
        <div className="todo-item-container" key={index}>
            {todo.isComplete ?
                (
                    <>
                        <span className="todo-item-toggle">
                            <img src={completeTick} alt="tick" />
                        </span>
                        <div className='todo-item-content completed' key={todo.id} onClick={() => completeTodo(todo.id)}>
                            {todo.text}
                        </div>
                    </>
                ) : (
                    <>
                        <span className="todo-item-toggle">
                            <img src={activeTick} alt="tick" />
                        </span>
                        <div className='todo-item-content' key={todo.id} onClick={() => completeTodo(todo.id)}>
                            {todo.text}
                        </div>
                    </>
                )}
            <div className="todo-item-options">
                <span className="icon-btn" onClick={() => setEdit({ id: todo.id, value: todo.text })}>
                    <img src={editIcon} alt="edit" />
                </span>
                <span className="icon-btn" onClick={() => removeTodo(todo.id)}>
                    <img src={closeIcon} alt="close" />
                </span>
            </div>
        </div>
    ));
};

export default Todo;