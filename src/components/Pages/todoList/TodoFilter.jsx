import React from 'react';

const TodoFilter = ({ filterStatus, handleFilterClick }) => {
    return (
        <div className="todo-filter-container">
            <div className="todo-filter-count">3 items left</div>
            <div className="todo-filter-status">
                <span
                    className={filterStatus === 'all' ? 'active' : ''}
                    onClick={() => handleFilterClick('all')}
                >
                    All
                </span>
                <span
                    className={filterStatus === 'active' ? 'active' : ''}
                    onClick={() => handleFilterClick('active')}
                >
                    Active
                </span>
                <span
                    className={filterStatus === 'completed' ? 'active' : ''}
                    onClick={() => handleFilterClick('completed')}
                >
                    Completed
                </span>
            </div>
        </div>
    );
};

export default TodoFilter;
