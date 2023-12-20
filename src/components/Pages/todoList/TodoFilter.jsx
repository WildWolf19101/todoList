import React, { useEffect, useState } from 'react';

import '../../../assets/css/TodoFilter.css'

const TodoFilter = ({ todos, filterStatus, handleFilterClick }) => {
    const [filteredTaskCount, setFilteredTaskCount] = useState(0);

    useEffect(() => {
        const countTasks = (filterStatus) => {
            const taskCount = todos.filter((task) => {
                if (filterStatus === "all") {
                    return true;
                } else if (filterStatus === "active") {
                    return !task.completed;
                } else if (filterStatus === "completed") {
                    return task.completed;
                } else {
                    return false;
                }
            }).length;
            setFilteredTaskCount(taskCount);
        };

        countTasks(filterStatus);
    }, [todos, filterStatus]);
    return (
        <div className="todo-filter-container">
            <div className="todo-filter-count">{filteredTaskCount} items left</div>
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
