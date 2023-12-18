import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

// Pages
import NotFoundPage from './Pages/NotFound'
import TodoList from './Pages/todoList'


// Layouts
import AllList from './Pages/todoList/AllList'
import ActiveListPages from './Pages/todoList/ActiveList'
import CompleteListPages from './Pages/todoList/CompleteList'

//css
import '../assets/css/App.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<TodoList />}>
      <Route index element={<AllList />} />
      <Route path="active" element={<ActiveListPages />} />
      <Route path="complete" element={<CompleteListPages />} />

      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
)


const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App