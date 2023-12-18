import React from 'react'

// image
import activeTick from '../../../assets/images/active-tick.svg'
import edit from '../../../assets/images/edit.svg'
import close from '../../../assets/images/delete.svg'

const List = () => {


    return (

        <div className="todo-item-container">
            <span className="todo-item-toggle">
                <img src={activeTick} alt="tick" />
            </span>
            <div className="todo-item-content">Thực hành lập trình</div>
            <div className="todo-item-options">
                <span className="icon-btn">
                    <img src={edit} alt="edit" />
                </span>
                <span className="icon-btn">
                    <img src={close} alt="close" />
                </span>
            </div>
        </div>

    )
}

export default List