import React, { useEffect, useState } from 'react'

// todoList
import Form from './TodoList/TodoForm'
import Todo from './TodoList/Todo'
import TodoFilter from './TodoList/TodoFilter'

// css
import '../../assets/css/TodoList.css'

const TodoList = () => {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);
    const [filterStatus, setFilterStatus] = useState('all');
    const [isMounted, setIsMounted] = useState(false);
    const [updateData, setUpdateData] = useState(null);

    useEffect(() => {
        // Kiểm tra xem component đã được mount chưa
        if (!isMounted) {
            // Đặt trạng thái khởi tạo từ local storage
            const initialTodos = JSON.parse(localStorage.getItem('todos')) || [];
            const initialFilterStatus = localStorage.getItem('filterStatus') || 'all';

            setTodos(initialTodos);
            setFilterStatus(initialFilterStatus);

            // Đánh dấu component đã được mount
            setIsMounted(true);
            console.log(initialTodos);
        } else {
            // Lưu trạng thái vào local storage khi todos hoặc filterStatus thay đổi
            localStorage.setItem('todos', JSON.stringify(todos));
            localStorage.setItem('filterStatus', filterStatus);
        }
    }, [todos, filterStatus, isMounted]);

    // add
    const addTodo = (todo) => {
        todo.preventDefault();

        if (!input.trim()) {
            return;
        } else if (updateData) {
            setTodos(todos.map((item) => (item.id === updateData ? { ...item, text: input } : item)));
            setInput('');
            setUpdateData(null);
        } else {
            const newInput = { id: Math.random(), text: input };
            setTodos([...todos, newInput]);
            setInput('');
        }
    };

    // update
    const updateTodo = (todo) => {
        setInput(todo.text);
        setUpdateData(todo.id);
    }

    // delete
    const removeTodo = todo => {
        const updatedTodo = todos.filter((e) => e.id !== todo.id);
        setTodos(updatedTodo);
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
        <>
            <div className="todo-container-wrapper">
                <div className="todo-container">
                    <Form input={input} setInput={setInput} addTodo={addTodo} />

                    <TodoFilter todos={todos} filterStatus={filterStatus} handleFilterClick={handleFilterClick} />

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
        </>
    )
}

export default TodoList