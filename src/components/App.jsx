import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Layout
import Header from '../components/Layouts/Header'
import Footer from '../components/Layouts/Footer'

// Pages
import TodoList from './Pages/TodoList'
import NotFound from './Pages/NotFound'

//css
import '../assets/css/App.css'



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