import React, { useState } from 'react'


const Form = () => {
    const [input, setInput] = useState('');

    const hanldeChange = e => {
        setInput(e.target.value);
    }

    const hanldeSumit = e => {
        e.preventDefault();

        console.log(input);
        setInput('')
    }

    return (
        <div className="todo-form-container">
            <form onSubmit={hanldeSumit}>
                <input
                    type="text"
                    placeholder="What need to be done?"
                    value={input}
                    onChange={hanldeChange}
                />
            </form>
        </div>
    )
}

export default Form