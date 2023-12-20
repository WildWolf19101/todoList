import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Pages
import TodoList from './Pages/TodoList'
import Header from '../components/Layouts/Header'
import Footer from '../components/Layouts/Footer'

//css
import '../assets/css/App.css'
import NotFound from './Pages/NotFound'



const App = () => {
  return (
    <div className="Root-layout">
      <Header />

      <Routes>
        <Route path='/' element={<TodoList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>

  )
}

export default App