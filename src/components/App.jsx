import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

// Pages
import TodoList from './Pages/todoList/todoList'

//css
import '../assets/css/App.css'



const App = () => {
  return (
    <div>
      <TodoList />
    </div>
  )
}

export default App