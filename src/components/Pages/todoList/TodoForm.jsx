import React from 'react'

// css
import '../../../assets/css/TodoForm.css'


const TodoForm = ({ input, setInput, addTodo }) => {

    return (
        <div className="todo-form-container">
            <form onSubmit={addTodo}>
                <>
                    <input
                        type="text"
                        placeholder="What need to be done?"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}

                    />
                </>

            </form>
        </div>
    )
}

export default TodoForm