import React, { useState, useRef, useEffect } from 'react'

// css
import '../../../assets/css/TodoForm.css'


const TodoForm = (props) => {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSumit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000), // Tạo ID ngẫu nhiên
            text: input,
        })

        setInput('')
    }

    return (
        <div className="todo-form-container">
            <form onSubmit={handleSumit}>
                {props.edit ? (
                    <>
                        <input
                            placeholder='Update your item'
                            value={input}
                            onChange={handleChange}
                            name='text'
                            ref={inputRef}
                        />
                    </>
                ) : (
                    <>
                        <input
                            type="text"
                            placeholder="What need to be done?"
                            value={input}
                            onChange={handleChange}
                            ref={inputRef}
                        />
                    </>
                )}

            </form>
        </div>
    )
}

export default TodoForm