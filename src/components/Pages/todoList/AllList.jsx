import React, { useState } from 'react'

// image
import plus from '../../../assets/images/plus.svg'
import ActiveList from './ActiveList';
import CompleteList from './CompleteList';

const All = () => {
    return (
        <div>
            <ActiveList />
            <CompleteList />
        </div>
    )
}

export default All