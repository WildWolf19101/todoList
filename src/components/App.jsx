import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Layout
import Header from '../components/Layouts/Header'
import Footer from '../components/Layouts/Footer'

// Pages
import TodoList from './Pages/TodoList'
import NotFound from './Pages/NotFound'

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<TodoList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>

  )
}

export default App